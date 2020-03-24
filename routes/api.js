const express = require('express');
const axios = require('axios');
const moment = require('moment');
const router = express.Router();
const parser = require('../util/parser');

const timeSeriesBaseUrl =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series';
const countriesBaseUrl =
  'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports';

const timeSeriesUrls = {
  recovered: `${timeSeriesBaseUrl}/time_series_19-covid-Recovered.csv`,
  confirmed: `${timeSeriesBaseUrl}/time_series_19-covid-Confirmed.csv`,
  deaths: `${timeSeriesBaseUrl}/time_series_19-covid-Deaths.csv`
};

router.get('/jhu-stats', (req, res) => {
  const recoveredRequest = axios.get(timeSeriesUrls.recovered);
  const confirmedRequest = axios.get(timeSeriesUrls.confirmed);
  const deathsRequest = axios.get(timeSeriesUrls.deaths);
  axios
    .all([recoveredRequest, confirmedRequest, deathsRequest])
    .then(
      axios.spread((...responses) => {
        recoveredData = parser
          .timeSeriesParser(responses[0].data)
          .filter(
            record => record.country.toLowerCase() === 'Pakistan'.toLowerCase()
          )[0];
        confirmedData = parser
          .timeSeriesParser(responses[1].data)
          .filter(
            record => record.country.toLowerCase() === 'Pakistan'.toLowerCase()
          )[0];
        deathsData = parser
          .timeSeriesParser(responses[2].data)
          .filter(
            record => record.country.toLowerCase() === 'Pakistan'.toLowerCase()
          )[0];
        const latestDate = moment(
          new Date(deathsData.history[deathsData.history.length - 1].date)
        ).format('MM-DD-YYYY');

        axios
          .get(`${countriesBaseUrl}/${latestDate}.csv`)
          .then(countriesResponse => {
            countryData = parser
              .regularParser(countriesResponse.data)
              .filter(record => {
                if (record.country)
                  return (
                    record.country.toLowerCase() === 'Pakistan'.toLowerCase()
                  );
              })[0];
            countryData.activeCases =
              countryData.confirmed -
              countryData.deaths -
              countryData.recovered;
            countryData.todayDeaths = Math.abs(
              deathsData.history[deathsData.history.length - 2].stat -
                deathsData.history[deathsData.history.length - 1].stat
            );
            countryData.todayRecovered = Math.abs(
              recoveredData.history[recoveredData.history.length - 2].stat -
                recoveredData.history[recoveredData.history.length - 1].stat
            );
            countryData.todayCases = Math.abs(
              confirmedData.history[confirmedData.history.length - 2].stat -
                confirmedData.history[confirmedData.history.length - 1].stat
            );
            res.send(countryData);
          })
          .catch(err => {
            console.error(err);
          });
      })
    )
    .catch(error => {
      console.log(error.name + ': ' + error.message);
      return res
        .status(503)
        .send(
          "Due to a change in JHU's data repository, this page is currently down for maintenance. Sorry for any inconvenience, please try again in a few hours."
        );
    });
});

module.exports = router;

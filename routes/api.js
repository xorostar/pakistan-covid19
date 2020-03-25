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
  confirmed: `${timeSeriesBaseUrl}/time_series_covid19_confirmed_global.csv`,
  deaths: `${timeSeriesBaseUrl}/time_series_covid19_deaths_global.csv`
};

router.get('/jhu-stats', (req, res) => {
  const confirmedRequest = axios.get(timeSeriesUrls.confirmed);
  const deathsRequest = axios.get(timeSeriesUrls.deaths);
  axios
    .all([confirmedRequest, deathsRequest])
    .then(
      axios.spread((...responses) => {
        confirmedData = parser
          .timeSeriesParser(responses[0].data)
          .filter(record => {
            if (record.country) {
              return record.country.toLowerCase() === 'Pakistan'.toLowerCase();
            }
          })[0];
        deathsData = parser
          .timeSeriesParser(responses[1].data)
          .filter(record => {
            if (record.country) {
              return record.country.toLowerCase() === 'Pakistan'.toLowerCase();
            }
          })[0];
        const latestDate = moment(
          new Date(deathsData.history[deathsData.history.length - 1].date)
        ).format('MM-DD-YYYY');

        axios
          .get(`${countriesBaseUrl}/${latestDate}.csv`)
          .then(countriesResponse => {
            countryData = parser
              .regularParser(countriesResponse.data)
              .filter(record => {
                if (record.country_region)
                  return (
                    record.country_region.toLowerCase() ===
                    'Pakistan'.toLowerCase()
                  );
              })[0];

            countryData.todayDeaths = Math.abs(
              deathsData.history[deathsData.history.length - 2].stat -
                deathsData.history[deathsData.history.length - 1].stat
            );

            countryData.fatalityRate = (
              (countryData.deaths / countryData.confirmed) *
              100
            ).toPrecision(2);

            countryData.recoveryRate = (
              (countryData.recovered / countryData.confirmed) *
              100
            ).toPrecision(2);

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
      console.error(error);
      return res
        .status(503)
        .send(
          "Due to a change in JHU's data repository, this page is currently down for maintenance. Sorry for any inconvenience, please try again in a few hours."
        );
    });
});

module.exports = router;

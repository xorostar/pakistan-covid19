const regularParser = data => {
  let parsedData = [];
  let rows = data.replace(/\r/gi, '').split('\n');

  let tableHead = rows[0];
  let tableBody = rows.slice(1);

  let properties = tableHead.split(',');
  tableBody.forEach(row => {
    let columns = row.split(',');
    let entry = {};
    for (let i = 0; i < properties.length; i++) {
      const property = properties[i];
      let key = property;
      if (property.indexOf('/') !== -1) {
        key = property.slice(0, property.indexOf('/'));
      }
      key = key.toLowerCase().replace(/ /gi, '_');
      entry[key] = columns[i];
    }
    parsedData.push(entry);
  });
  return parsedData;
};

const timeSeriesParser = data => {
  let parsedData = [];
  let rows = data.replace(/\r/gi, '').split('\n');

  let tableHead = rows[0];
  let tableBody = rows.slice(1);

  let properties = tableHead.split(',');
  tableBody.forEach(row => {
    let columns = row.split(',');
    let entry = {};
    for (let i = 0; i < properties.length; i++) {
      const property = properties[i];
      if (i < 4) {
        let key = property;
        if (property.indexOf('/') !== -1) {
          key = property.slice(0, property.indexOf('/'));
        }
        key = key.toLowerCase().replace(/ /gi, '_');
        entry[key] = columns[i];
      } else if (i >= 4) {
        if (!entry.history) entry.history = [];
        entry.history.push({
          date: property,
          stat: columns[i]
        });
      }
    }
    parsedData.push(entry);
  });
  return parsedData;
};

module.exports = { regularParser, timeSeriesParser };

const { MongoClient } = require('mongodb');
const { URL } = require('url');
const https = require('https');
const Plotly = require('plotly.js-dist');

const uri = 'mongodb+srv://rhitamdutta1:' + encodeURIComponent('Fly@2102') + '@cluster1.zv9orap.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  tlsCAFile: https.globalAgent.options.ca[0].context.context
});

const db = client.db('database_name');
const query = db.collection('query');

const hy = prompt('Press Enter for site');

const x = ['Sector 1', 'Sector 4', 'Sector 8', 'Sector 15', 'Sector 17'];
const y = [];

query.countDocuments({ area: 'sector 1' }, (err, count1) => {
  if (err) {
    console.error(err);
    return;
  }
  y.push(count1);

  query.countDocuments({ area: 'sector 4' }, (err, count2) => {
    if (err) {
      console.error(err);
      return;
    }
    y.push(count2);

    query.countDocuments({ area: 'sector 8' }, (err, count3) => {
      if (err) {
        console.error(err);
        return;
      }
      y.push(count3);

      query.countDocuments({ area: 'sector 15' }, (err, count4) => {
        if (err) {
          console.error(err);
          return;
        }
        y.push(count4);

        query.countDocuments({ area: 'sector 17' }, (err, count5) => {
          if (err) {
            console.error(err);
            return;
          }
          y.push(count5);

          const data = [{ x, y, type: 'bar' }];
          const layout = {
            xaxis: { title: 'Area' },
            yaxis: { title: 'Rate' },
            title: 'Area Wise Report'
          };
          Plotly.newPlot('chart', data, layout);
        });
      });
    });
  });
});

const lin = 'Area with high rate homelessness:';
console.log(lin.padStart(20)); // center text by padding left and right

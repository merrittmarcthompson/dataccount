const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/owner/accessRequests', (req, res) => {
  console.log('in get access requests new');
  res.status(200);
  res.set('Content-Type', 'text/html');
  res.send({
    requests: [
      {
        id: 2345,
        by: "www.amazon.com",
        timeStamp: "04/20/2020 11:36:05",
      }, {
        id: 2357,
        by: "www.irobot.com",
        timeStamp: "04/20/2020 13:30:17",
      },
    ],
    requestDataItems: [
      {
        requestId: 2345,
        key: "Amazon Shipping Address",
        purpose: "Print shipping label",
        doesKeyExist: 0,
        currentValue: null,
        newValue: null,
      }, {
        requestId: 2345,
        key: "Amazon Credit Card Number",
        purpose: "Purchase 1 item(s) for $19.99 total",
        doesKeyExist: 1,
        currentValue: "4097 1279 6350 0011",
        newValue: null,
      }, {
        requestId: 2357,
        key: "Roomba Floorplan",
        purpose: "Store the current floorplan created by your robot vacuum",
        doesKeyExist: 1,
        currentValue: "(27,34)(19,46)(109,17)",
        newValue: "(27,35)(20,46)(110,19)",
      }
    ],
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('myapp listening on port ' + port));
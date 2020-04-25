const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/owner/accessRequestItems/:requestId', (req, res) => {
  console.log('/api/owner/accessRequestItems');
  if (req.params.requestId == "2345") {
    res.status(200);
    res.send({
      requestItems: [
        {
          requestId: 2345,
          key: "Amazon Credit Card Number",
          purpose: "Purchase 1 item(s) for $19.99 total",
          doesKeyExist: 1,
          currentValue: "4097 1279 6350 0011",
          newValue: null,
        }, {
          requestId: 2345,
          key: "Amazon Shipping Address",
          purpose: "Print shipping label",
          doesKeyExist: 0,
          currentValue: null,
          newValue: null,
        }
      ]
    });
  } else if (req.params.requestId == "2357") {
    res.status(200);
    res.send({
      requestItems: [
        {
          requestId: 2357,
          key: "Roomba Floorplan",
          purpose: "Store the current floorplan created by your robot vacuum",
          doesKeyExist: 1,
          currentValue: "(27,34)(19,46)(109,17)",
          newValue: "(27,35)(20,46)(110,19)",
        }
      ],
    });
  } else {
    res.status(400);
    res.send();
  }
});

app.get('/api/owner/accessRequests', (req, res) => {
  console.log('/api/owner/accessRequests');
  res.status(200);
  res.send({
    requests: [
      {
        id: 2345,
        by: "www.amazon.com",
        timeStamp: "04/20/2020 11:36:05",
      }, {
        id: 2357,
        by: "irobot-Roomba-s9-000136007",
        timeStamp: "04/20/2020 13:30:17",
      },
    ],
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('myapp listening on port ' + port));
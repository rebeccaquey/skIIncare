const express = require('express');
const bodyParser = require('body-parser');
const products = require('../db');
const twilio = require('twilio');
const Twilio = require('./twilio.js');
const messages = require('./messages.js');
const cors = require('cors');
const seed = require('../db/seed.js');

const accountSid = Twilio.accountSid;
const authToken = Twilio.authToken;
const twilioNumber = Twilio.twilioNumber;


const client = new twilio(accountSid, authToken);

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(cors());
app.options('*', cors());

app.get('/products', (req, res) => {
  let products = seed.sampleData;
  console.log(req);
  res.status(200).send(products);
  // products.selectAll(function(err, data) {
  //   if (err) {
  //     res.sendStatus(500);
  //   } else {
  //     // res.json(data);
  //     res.status(200).send(data);
  //   }
  // });
});

app.post('/products', (req, res) => {
  products.addToInventory(req,res);
})

app.post('/alerts', (req, res) => {
  res.status(200).send('it worked!!!');
  console.log(req.body);
  client.messages
  .create({
    from: twilioNumber,
    to: req.body.to,
    body: req.body.body
  })
  .then(() => {
    console.log('alert sent!');
    res.send(JSON.stringify({ success: true }));
  })
  .catch(err => {
    console.log(err);
    res.send(JSON.stringify({ success: false }));
  });
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});


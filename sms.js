
require('dotenv').config();
const accountSMS = process.env.TWILIO_ACCOUNT;
const tokenSMS  = process.env.TWILIO_TOKEN;
const client = require('twilio')(accountSMS, tokenSMS);


  client.messages.create({
    to: '+17809372950',
    from: '+16042434743',
    body: 'Luke... This is your father'
  })
  .then((message) => console.log(message));


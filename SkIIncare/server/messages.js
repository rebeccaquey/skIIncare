const twilio = require('twilio');
const Twilio = require('./twilio.js');
const accountSid = Twilio.accountSid;
const authToken = Twilio.authToken;
const twilioNumber = Twilio.twilioNumber;
// const cron = require('node-cron');
cronJob = require('cron').CronJob;

const client = new twilio(accountSid, authToken);

var textJob = new cronJob( '30 23 * * 1,3,5', () => {
  client.messages.create({
    to:'+16507664672',
    from: twilioNumber,
    body:'Use a sheet mask tonight for an extra boost of hydration'
  }, ( err, data ) => {});
},  null, true);

var textJob = new cronJob( '52 22 * * *', () => {
  client.messages.create({
    to:'+14153092983',
    from: twilioNumber,
    body:'Use a sheet mask tonight for an extra boost of hydration'
  }, ( err, data ) => {});
},  null, true);

var textJob = new cronJob( '53 22 * * *', () => {
  client.messages.create({
    to:'+14153092983',
    from: twilioNumber,
    body:'testing'
  }, ( err, data ) => {});
},  null, true);

var textJob = new cronJob( '0 9 * * *', () => {
  client.messages.create({
    to:'+16507664672',
    from: twilioNumber,
    body:'Good Morning! Don\'t forget to apply your sunscreen today :)'
  }, ( err, data ) => {});
},  null, true);

var textJob = new cronJob( '00 23 * * *', () => {
  client.messages.create({
    to:'+16507664672',
    from: twilioNumber,
    body:'Time to clean up & get ready for bed! Remember to do your nighttime routine and get enough beauty sleep so your skin will glow tomorrow <3'
  }, ( err, data ) => {});
},  null, true);

var textJob = new cronJob( '0 22 27 JUL *', () => {
  client.messages.create({
    to:'+16507664672',
    from: twilioNumber,
    body:'Tatcha cleansing oil expiring in one month! Make sure to use it all up before 8/27/20!'
  }, ( err, data ) => {});
},  null, true);

var textJob = new cronJob( '0 22 5 Feb *', () => {
  client.messages.create({
    to:'+16507664672',
    from: twilioNumber,
    body:'Youth to the People cleanser expiring in one month! Make sure to use it all up before 3/5/21!'
  }, ( err, data ) => {});
},  null, true);

var textJob = new cronJob( '0 22 10 Sep *', () => {
  client.messages.create({
    to:'+16507664672',
    from: twilioNumber,
    body:'SKII Essence expiring in one month! Make sure to use it all up before 10/10/21!'
  }, ( err, data ) => {});
},  null, true);

var textJob = new cronJob( '0 22 30 Oct *', () => {
  client.messages.create({
    to:'+16507664672',
    from: twilioNumber,
    body:'The Ordinary Hyaluronic Acid expiring in one month! Make sure to use it all up before 11/30/20!'
  }, ( err, data ) => {});
},  null, true);



// client.messages.create({
//   body: 'does this work?',
//   to: '+16507664672',  // Text this number
//   from: '+14156886890' // From a valid Twilio number
// })
// .then((message) => console.log(message.sid));
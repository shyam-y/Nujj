const dwolla = require('dwolla-v2');

const request = require('request');

var jwt = require('jsonwebtoken');
var file = require('file-system');


// Navigate to https://dashboard.dwolla.com/applications (production) or https://dashboard-sandbox.dwolla.com/applications (Sandbox) for your application key and secret.
const appKey = 'JEOdM9UAfa5EtDwZptSSJ1BZqKJttYnM2F3RH2mtfl3PwKsRXh';
const appSecret = 'wbRyduGrkqphA7xMneLu1c9et18JOoxcjK1qE4WpDoQzGLq3GL';
const client = new dwolla.Client({
  key: appKey,
  secret: appSecret,
  environment: 'sandbox', // optional - defaults to production
});


// // create a token
// client.auth.client()
//   .then(appToken => appToken.get('customers', { limit: 100 }))
//   .then(res => console.log(JSON.stringify(res.body)));


// client.auth.client()
// .then(appToken => appToken.get('/'))
// .then(res => console.log(JSON.stringify(res.body)));

var accountUrl = 'https://api-sandbox.dwolla.com/accounts/912de065-c431-48f2-a629-8832b9e362b1';

client.auth.client()
.then(appToken => appToken.get(accountUrl))
.then(res => console.log(JSON.stringify(res.body.name)));



// //create access token postman


// var options = { method: 'POST',
//   url: 'https://api-sandbox.dwolla.com/token',
//   headers: 
//    { 'Postman-Token': '1df94fdd-fdc8-44e4-a313-fc75ac356026',
//      'cache-control': 'no-cache',
//      Authorization: 'Basic SkVPZE05VUFmYTVFdER3WnB0U1NKMUJacUtKdHRZbk0yRjNSSDJtdGZsM1B3S3NSWGg6d2JSeWR1R3JrcXBoQTd4TW5lTHUxYzlldDE4Sk9veGNqSzFxRTRXcERvUXpHTHEzR0w=' },
//   form: { grant_type: 'client_credentials' } };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });



//  //root
//  var options = { method: 'GET',
//  url: 'https://api-sandbox.dwolla.com/',
//  headers: 
//   { 'Postman-Token': '1df94fdd-fdc8-44e4-a313-fc75ac356026',
//     'cache-control': 'no-cache',
//     Accept: 'application/vnd.dwolla.v1.hal+json',
//     Authorization: 'Bearer BxrYBxyVm9C3rv9mcdENYMXJWPtODwssrY7QQmXYm4FSluminm' } };

// request(options, function (error, response, body) {
//  if (error) throw new Error(error);

//  console.log(body);
// });



// //create recive only user

// var options = { method: 'POST',
//   url: 'https://api-sandbox.dwolla.com/customers',
//   headers: 
//    { 'Postman-Token': '1df94fdd-fdc8-44e4-a313-fc75ac356026',
//      'cache-control': 'no-cache',
//      'Content-Type': 'application/json',
//      Authorization: 'Bearer tK5k99UG4VqLpczz8ka8HuHaHfnSLywxNoLydnBKEuh7QggVI5',
//      Accept: 'application/vnd.dwolla.v1.hal+json' },
//   body: 
//    { firstName: 'rama',
//      lastName: 'ram',
//      email: 'ramaram@test.com',
//      type: 'receive-only' },
//   json: true };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   // console.log(body);
// });


// //ADD BANK TO RO


// var options = { method: 'POST',
//   url: 'https://api-sandbox.dwolla.com/customers/38df0b33-5ef6-4a4f-b661-48653b55c29b/funding-sources',
//   headers: 
//    { 'Postman-Token': '1df94fdd-fdc8-44e4-a313-fc75ac356026',
//      'cache-control': 'no-cache',
//      'Content-Type': 'application/json',
//      Authorization: 'Bearer tK5k99UG4VqLpczz8ka8HuHaHfnSLywxNoLydnBKEuh7QggVI5',
//      Accept: 'application/vnd.dwolla.v1.hal+json' },
//   body: 
//    { accountNumber: '123456789',
//      routingNumber: '222222226',
//      bankAccountType: 'checking',
//      name: 'Sandbox checking account' },
//   json: true };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   // console.log(body);
// });


// //GET SOURCE FUNDING SOURCE


// var options = { method: 'GET',
//   url: 'https://api-sandbox.dwolla.com/accounts/912de065-c431-48f2-a629-8832b9e362b1/funding-sources',
//   qs: { removed: 'false' },
//   headers: 
//    { 'Postman-Token': '1df94fdd-fdc8-44e4-a313-fc75ac356026',
//      'cache-control': 'no-cache',
//      Authorization: 'Bearer BxrYBxyVm9C3rv9mcdENYMXJWPtODwssrY7QQmXYm4FSluminm',
//      Accept: 'application/vnd.dwolla.v1.hal+json' } };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });


// //CREATE TRANSFER



// var options = { method: 'POST',
//   url: 'https://api-sandbox.dwolla.com/transfers',
//   headers: 
//    { 'Postman-Token': '1df94fdd-fdc8-44e4-a313-fc75ac356026',
//      'cache-control': 'no-cache',
//      'Content-Type': 'application/json',
//      Authorization: 'Bearer tK5k99UG4VqLpczz8ka8HuHaHfnSLywxNoLydnBKEuh7QggVI5',
//      Accept: 'application/vnd.dwolla.v1.hal+json' },
//   body: 
//    { _links: 
//       { source: { href: 'https://api-sandbox.dwolla.com/funding-sources/db264196-499a-43a5-a163-27fc040a1877' },
//         destination: { href: 'https://api-sandbox.dwolla.com/funding-sources/7b9287ca-11ea-436a-9826-19bb494d7579' } },
//      amount: { currency: 'USD', value: '1.00' } },
//   json: true };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   // console.log(body);
// });



// //Get Transfer


// var options = { method: 'GET',
//   url: 'https://api-sandbox.dwolla.com/transfers/6e93e437-c51f-ea11-8120-d116e9a58b4c',
//   headers: 
//    { 'Postman-Token': '1df94fdd-fdc8-44e4-a313-fc75ac356026',
//      'cache-control': 'no-cache',
//      Authorization: 'Bearer BxrYBxyVm9C3rv9mcdENYMXJWPtODwssrY7QQmXYm4FSluminm',
//      Accept: 'application/vnd.dwolla.v1.hal+json' } };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });



// //process pending bank transfer
// var options = { method: 'POST',
//   url: 'https://api-sandbox.dwolla.com/sandbox-simulations',
//   headers: 
//    { 'Postman-Token': '1df94fdd-fdc8-44e4-a313-fc75ac356026',
//      'cache-control': 'no-cache',
//      'Content-Type': 'application/json',
//      Authorization: 'Bearer BxrYBxyVm9C3rv9mcdENYMXJWPtODwssrY7QQmXYm4FSluminm',
//      Accept: 'application/vnd.dwolla.v1.hal+json' } };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

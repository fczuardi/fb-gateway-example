var config = require('./config');
var ApiBuilder = require('claudia-api-builder');
var fbWebhookGet = require('calamarble-fb-webhook-verify').apiEndpoint;
var postWebhook = require('calamarble-xhub').apiEndpoint;


var api = new ApiBuilder();
api.get('/fbwebhook', fbWebhookGet(config));
api.post('/fbwebhook', postWebhook(config));

module.exports = api;

/**
 * The IntentController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/IntentService');
const createIntent = async (request, response) => {
  await Controller.handleRequest(request, response, service.createIntent);
};

const deleteIntent = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteIntent);
};

const deleteIntentIntentReport = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteIntentIntentReport);
};

const listIntent = async (request, response) => {
  await Controller.handleRequest(request, response, service.listIntent);
};

const listIntentIntentReport = async (request, response) => {
  await Controller.handleRequest(request, response, service.listIntentIntentReport);
};

const patchIntent = async (request, response) => {
  await Controller.handleRequest(request, response, service.patchIntent);
};

const retrieveIntent = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveIntent);
};

const retrieveIntentIntentReport = async (request, response) => {
  await Controller.handleRequest(request, response, service.retrieveIntentIntentReport);
};


module.exports = {
  createIntent,
  deleteIntent,
  deleteIntentIntentReport,
  listIntent,
  listIntentIntentReport,
  patchIntent,
  retrieveIntent,
  retrieveIntentIntentReport,
};

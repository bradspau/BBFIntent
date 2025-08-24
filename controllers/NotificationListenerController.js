/**
 * The NotificationListenerController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/NotificationListenerService');
const intentAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.intentAttributeValueChangeEvent);
};

const intentCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.intentCreateEvent);
};

const intentDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.intentDeleteEvent);
};

const intentReportAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.intentReportAttributeValueChangeEvent);
};

const intentReportCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.intentReportCreateEvent);
};

const intentReportDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.intentReportDeleteEvent);
};

const intentSpecificationAttributeValueChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.intentSpecificationAttributeValueChangeEvent);
};

const intentSpecificationCreateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.intentSpecificationCreateEvent);
};

const intentSpecificationDeleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.intentSpecificationDeleteEvent);
};

const intentSpecificationStatusChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.intentSpecificationStatusChangeEvent);
};

const intentStatusChangeEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.intentStatusChangeEvent);
};


module.exports = {
  intentAttributeValueChangeEvent,
  intentCreateEvent,
  intentDeleteEvent,
  intentReportAttributeValueChangeEvent,
  intentReportCreateEvent,
  intentReportDeleteEvent,
  intentSpecificationAttributeValueChangeEvent,
  intentSpecificationCreateEvent,
  intentSpecificationDeleteEvent,
  intentSpecificationStatusChangeEvent,
  intentStatusChangeEvent,
};

/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Client listener for entity IntentAttributeValueChangeEvent
   * Example of a client listener for receiving the notification IntentAttributeValueChangeEvent
   *
   * intentAttributeValueChangeEvent IntentAttributeValueChangeEvent Intent attributeValueChange Event payload
   * no response value expected for this operation
   **/
  const intentAttributeValueChangeEvent =  ( args, context /* intentAttributeValueChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "intentAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("intentAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity IntentCreateEvent
   * Example of a client listener for receiving the notification IntentCreateEvent
   *
   * intentCreateEvent IntentCreateEvent Intent create Event payload
   * no response value expected for this operation
   **/
  const intentCreateEvent =  ( args, context /* intentCreateEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "intentCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("intentCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity IntentDeleteEvent
   * Example of a client listener for receiving the notification IntentDeleteEvent
   *
   * intentDeleteEvent IntentDeleteEvent Intent delete Event payload
   * no response value expected for this operation
   **/
  const intentDeleteEvent =  ( args, context /* intentDeleteEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "intentDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("intentDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity IntentReportAttributeValueChangeEvent
   * Example of a client listener for receiving the notification IntentReportAttributeValueChangeEvent
   *
   * intentReportAttributeValueChange IntentReportAttributeValueChange IntentReport attributeValueChange Event payload
   * no response value expected for this operation
   **/
  const intentReportAttributeValueChangeEvent =  ( args, context /* intentReportAttributeValueChange  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "intentReportAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("intentReportAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity IntentReportCreateEvent
   * Example of a client listener for receiving the notification IntentReportCreateEvent
   *
   * intentReportCreateEvent IntentReportCreateEvent IntentReport create Event payload
   * no response value expected for this operation
   **/
  const intentReportCreateEvent =  ( args, context /* intentReportCreateEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "intentReportCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("intentReportCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity IntentReportDeleteEvent
   * Example of a client listener for receiving the notification IntentReportDeleteEvent
   *
   * intentReportDeleteEvent IntentReportDeleteEvent IntentReport delete Event payload
   * no response value expected for this operation
   **/
  const intentReportDeleteEvent =  ( args, context /* intentReportDeleteEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "intentReportDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("intentReportDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity IntentSpecificationAttributeValueChangeEvent
   * Example of a client listener for receiving the notification IntentSpecificationAttributeValueChangeEvent
   *
   * intentSpecificationAttributeValueChangeEvent IntentSpecificationAttributeValueChangeEvent IntentSpecification attributeValueChange Event payload
   * no response value expected for this operation
   **/
  const intentSpecificationAttributeValueChangeEvent =  ( args, context /* intentSpecificationAttributeValueChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "intentSpecificationAttributeValueChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("intentSpecificationAttributeValueChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity IntentSpecificationCreateEvent
   * Example of a client listener for receiving the notification IntentSpecificationCreateEvent
   *
   * intentSpecificationCreateEvent IntentSpecificationCreateEvent IntentSpecification create Event payload
   * no response value expected for this operation
   **/
  const intentSpecificationCreateEvent =  ( args, context /* intentSpecificationCreateEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "intentSpecificationCreateEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("intentSpecificationCreateEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity IntentSpecificationDeleteEvent
   * Example of a client listener for receiving the notification IntentSpecificationDeleteEvent
   *
   * intentSpecificationDeleteEvent IntentSpecificationDeleteEvent IntentSpecification delete Event payload
   * no response value expected for this operation
   **/
  const intentSpecificationDeleteEvent =  ( args, context /* intentSpecificationDeleteEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "intentSpecificationDeleteEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("intentSpecificationDeleteEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity IntentSpecificationStatusChangeEvent
   * Example of a client listener for receiving the notification IntentSpecificationStatusChangeEvent
   *
   * intentSpecificationStatusChangeEvent IntentSpecificationStatusChangeEvent IntentSpecification statusChange Event payload
   * no response value expected for this operation
   **/
  const intentSpecificationStatusChangeEvent =  ( args, context /* intentSpecificationStatusChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "intentSpecificationStatusChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("intentSpecificationStatusChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Client listener for entity IntentStatusChangeEvent
   * Example of a client listener for receiving the notification IntentStatusChangeEvent
   *
   * intentStatusChangeEvent IntentStatusChangeEvent Intent statusChange Event payload
   * no response value expected for this operation
   **/
  const intentStatusChangeEvent =  ( args, context /* intentStatusChangeEvent  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "NotificationListener";
        context.operationId  = "intentStatusChangeEvent";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("intentStatusChangeEvent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

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

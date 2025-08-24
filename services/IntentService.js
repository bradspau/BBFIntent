/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a Intent
   * This operation creates a Intent entity.
   *
   * intentFVO IntentFVO The Intent to be created
   * fields String Comma-separated properties to be provided in response (optional)
   * returns Intent
   **/
  const createIntent =  ( args, context /* intentFVOfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Intent";
        context.operationId  = "createIntent";
        context.method       = "post";
        try {
          /* matching isRestfulCreate */
          resolve(Service.create(args, context ));

        } catch (e) {
          console.log("createIntent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a Intent
   * This operation deletes a Intent entity.
   *
   * id String Identifier of the Resource
   * no response value expected for this operation
   **/
  const deleteIntent =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Intent";
        context.operationId  = "deleteIntent";
        context.method       = "delete";
        try {
          /* matching isRestfulDestroy */
          resolve(Service.remove(args, context ));

        } catch (e) {
          console.log("deleteIntent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a IntentReport
   * This operation deletes a IntentReport entity.
   *
   * id String Identifier of the Resource
   * intentId String Identifier of the Intent Resource
   * no response value expected for this operation
   **/
  const deleteIntentIntentReport =  ( args, context /* idintentId  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Intent";
        context.operationId  = "deleteIntentIntentReport";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteIntentIntentReport: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find Intent objects
   * List or find Intent objects
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listIntent =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Intent";
        context.operationId  = "listIntent";
        context.method       = "get";
        try {
          /* matching isRestfulIndex */
          resolve(Service.index(args, context ));

        } catch (e) {
          console.log("listIntent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find IntentReport objects
   * List or find IntentReport objects
   *
   * intentId String Identifier of the Intent Resource
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listIntentIntentReport =  ( args, context /* intentIdfieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Intent";
        context.operationId  = "listIntentIntentReport";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listIntentIntentReport: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a Intent
   * This operation updates partially a Intent entity.
   *
   * id String Identifier of the Resource
   * intentMVO IntentMVO The Intent to be patched
   * fields String Comma-separated properties to be provided in response (optional)
   * returns Intent
   **/
  const patchIntent =  ( args, context /* idintentMVOfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Intent";
        context.operationId  = "patchIntent";
        context.method       = "patch";
        try {
          /* matching isRestfulUpdate */
          resolve(Service.update(args, context ));

        } catch (e) {
          console.log("patchIntent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a Intent by ID
   * This operation retrieves a Intent entity. Attribute selection enabled for all first level attributes.
   *
   * id String Identifier of the Resource
   * fields String Comma-separated properties to be provided in response (optional)
   * returns Intent
   **/
  const retrieveIntent =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Intent";
        context.operationId  = "retrieveIntent";
        context.method       = "get";
        try {
          /* matching isRestfulShow */
          resolve(Service.show(args, context ));

        } catch (e) {
          console.log("retrieveIntent: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a IntentReport by ID
   * This operation retrieves a IntentReport entity. Attribute selection enabled for all first level attributes.
   *
   * id String Identifier of the Resource
   * intentId String Identifier of the Intent Resource
   * fields String Comma-separated properties to be provided in response (optional)
   * returns IntentReport
   **/
  const retrieveIntentIntentReport =  ( args, context /* idintentIdfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "Intent";
        context.operationId  = "retrieveIntentIntentReport";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveIntentIntentReport: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

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

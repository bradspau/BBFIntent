/* eslint-disable no-unused-vars */
const Service = require('./Service');

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
        context.classname    = "IntentReport";
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
        context.classname    = "IntentReport";
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
        context.classname    = "IntentReport";
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
  deleteIntentIntentReport,
  listIntentIntentReport,
  retrieveIntentIntentReport,
};

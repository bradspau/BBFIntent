/* eslint-disable no-unused-vars */
const Service = require('./Service');

  /**
   * Creates a IntentSpecification
   * This operation creates a IntentSpecification entity.
   *
   * intentSpecificationFVO IntentSpecificationFVO The IntentSpecification to be created
   * fields String Comma-separated properties to be provided in response (optional)
   * returns IntentSpecification
   **/
  const createIntentSpecification =  ( args, context /* intentSpecificationFVOfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "IntentSpecification";
        context.operationId  = "createIntentSpecification";
        context.method       = "post";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("createIntentSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Deletes a IntentSpecification
   * This operation deletes a IntentSpecification entity.
   *
   * id String Identifier of the Resource
   * no response value expected for this operation
   **/
  const deleteIntentSpecification =  ( args, context /* id  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "IntentSpecification";
        context.operationId  = "deleteIntentSpecification";
        context.method       = "delete";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("deleteIntentSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * List or find IntentSpecification objects
   * List or find IntentSpecification objects
   *
   * fields String Comma-separated properties to be provided in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/
  const listIntentSpecification =  ( args, context /* fieldsoffsetlimit  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "IntentSpecification";
        context.operationId  = "listIntentSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("listIntentSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Updates partially a IntentSpecification
   * This operation updates partially a IntentSpecification entity.
   *
   * id String Identifier of the Resource
   * intentSpecificationMVO IntentSpecificationMVO The IntentSpecification to be patched
   * fields String Comma-separated properties to be provided in response (optional)
   * returns IntentSpecification
   **/
  const patchIntentSpecification =  ( args, context /* idintentSpecificationMVOfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "IntentSpecification";
        context.operationId  = "patchIntentSpecification";
        context.method       = "patch";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("patchIntentSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    
  /**
   * Retrieves a IntentSpecification by ID
   * This operation retrieves a IntentSpecification entity. Attribute selection enabled for all first level attributes.
   *
   * id String Identifier of the Resource
   * fields String Comma-separated properties to be provided in response (optional)
   * returns IntentSpecification
   **/
  const retrieveIntentSpecification =  ( args, context /* idfields  */) =>
    new Promise(
      async (resolve) => {
        context.classname    = "IntentSpecification";
        context.operationId  = "retrieveIntentSpecification";
        context.method       = "get";
        try {
          /* NOT matching isRestful */
          resolve(Service.serve(args, context ));

        } catch (e) {
          console.log("retrieveIntentSpecification: error=" + e);
          resolve(Service.rejectResponse(
            e.message || 'Invalid input',
            e.status || 405,
          ));
        }
      },
    )
    

module.exports = {
  createIntentSpecification,
  deleteIntentSpecification,
  listIntentSpecification,
  patchIntentSpecification,
  retrieveIntentSpecification,
};

/**
 * Topaz API
 * ## Topaz API Spec  To get up and running with Topaz API as quickly as possible, read through these docs.  ### Prerequisites  Create an account at [https://topaz.io](https://topaz.io), log in, and generate an API Token.  You'll need an API Token to create a new app, create objects, create hashes, and view proofs.  All API requests should be prefixed with `/v1`, indicating that you're targeting version 1 of our API.  ### Guarantee  Topaz API follows Semantic Versioning (https://semver.org), so expect that any breaking changes will be versioned under a new route prefix.
 *
 * OpenAPI spec version: 0.1.17
 * Contact: hello@topaz.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/HashInput', 'model/HashOutput', 'model/HashOutputDetailed'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/HashInput'), require('../model/HashOutput'), require('../model/HashOutputDetailed'));
  } else {
    // Browser globals (root is window)
    if (!root.TopazApi) {
      root.TopazApi = {};
    }
    root.TopazApi.HashesApi = factory(root.TopazApi.ApiClient, root.TopazApi.HashInput, root.TopazApi.HashOutput, root.TopazApi.HashOutputDetailed);
  }
}(this, function(ApiClient, HashInput, HashOutput, HashOutputDetailed) {
  'use strict';

  /**
   * Hashes service.
   * @module api/HashesApi
   * @version 0.1.17
   */

  /**
   * Constructs a new HashesApi. 
   * @alias module:api/HashesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createHash operation.
     * @callback module:api/HashesApi~createHashCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HashOutputDetailed} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Hash
     * This endpoint inputs a json object in it&#39;s body which defines a &#x60;hash&#x60; property. This &#x60;hash&#x60; should be a hex-encoded SHA256 hash. 
     * @param {String} appId 
     * @param {String} objectId 
     * @param {Object} opts Optional parameters
     * @param {module:model/HashInput} opts.body Pass in a single &#x60;hash&#x60; string to create a hash
     * @param {module:api/HashesApi~createHashCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HashOutputDetailed}
     */
    this.createHash = function(appId, objectId, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling createHash");
      }

      // verify the required parameter 'objectId' is set
      if (objectId === undefined || objectId === null) {
        throw new Error("Missing the required parameter 'objectId' when calling createHash");
      }


      var pathParams = {
        'appId': appId,
        'objectId': objectId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API Key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = HashOutputDetailed;

      return this.apiClient.callApi(
        '/apps/{appId}/objects/{objectId}/hashes', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findHashes operation.
     * @callback module:api/HashesApi~findHashesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/HashOutput>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Hashes
     * This endpoint will return all &#x60;hashes&#x60; which have been associated with an &#x60;object&#x60;
     * @param {String} appId 
     * @param {String} objectId 
     * @param {module:api/HashesApi~findHashesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/HashOutput>}
     */
    this.findHashes = function(appId, objectId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling findHashes");
      }

      // verify the required parameter 'objectId' is set
      if (objectId === undefined || objectId === null) {
        throw new Error("Missing the required parameter 'objectId' when calling findHashes");
      }


      var pathParams = {
        'appId': appId,
        'objectId': objectId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API Key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [HashOutput];

      return this.apiClient.callApi(
        '/apps/{appId}/objects/{objectId}/hashes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getHash operation.
     * @callback module:api/HashesApi~getHashCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HashOutputDetailed} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Hash
     * This endpoint will return details about a single hash, given the &#x60;hashId&#x60; passed in as the request parameter
     * @param {String} appId 
     * @param {String} objectId 
     * @param {String} hashId 
     * @param {module:api/HashesApi~getHashCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HashOutputDetailed}
     */
    this.getHash = function(appId, objectId, hashId, callback) {
      var postBody = null;

      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getHash");
      }

      // verify the required parameter 'objectId' is set
      if (objectId === undefined || objectId === null) {
        throw new Error("Missing the required parameter 'objectId' when calling getHash");
      }

      // verify the required parameter 'hashId' is set
      if (hashId === undefined || hashId === null) {
        throw new Error("Missing the required parameter 'hashId' when calling getHash");
      }


      var pathParams = {
        'appId': appId,
        'objectId': objectId,
        'hashId': hashId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['API Key'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = HashOutputDetailed;

      return this.apiClient.callApi(
        '/apps/{appId}/objects/{objectId}/hashes/{hashId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));

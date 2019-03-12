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
    define(['ApiClient', 'model/HashCommon'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./HashCommon'));
  } else {
    // Browser globals (root is window)
    if (!root.TopazApi) {
      root.TopazApi = {};
    }
    root.TopazApi.HashOutput = factory(root.TopazApi.ApiClient, root.TopazApi.HashCommon);
  }
}(this, function(ApiClient, HashCommon) {
  'use strict';




  /**
   * The HashOutput model module.
   * @module model/HashOutput
   * @version 0.1.17
   */

  /**
   * Constructs a new <code>HashOutput</code>.
   * The properties that are included when fetching a list of Hashes.
   * @alias module:model/HashOutput
   * @class
   * @implements module:model/HashCommon
   * @param hash {String} 
   * @param id {String} 
   * @param unixTimestamp {Number} 
   * @param objectId {String} 
   */
  var exports = function(hash, id, unixTimestamp, objectId) {
    var _this = this;

    HashCommon.call(_this, hash);
    _this['id'] = id;
    _this['unixTimestamp'] = unixTimestamp;
    _this['objectId'] = objectId;

  };

  /**
   * Constructs a <code>HashOutput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HashOutput} obj Optional instance to populate.
   * @return {module:model/HashOutput} The populated <code>HashOutput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      HashCommon.constructFromObject(data, obj);
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('unixTimestamp')) {
        obj['unixTimestamp'] = ApiClient.convertToType(data['unixTimestamp'], 'Number');
      }
      if (data.hasOwnProperty('objectId')) {
        obj['objectId'] = ApiClient.convertToType(data['objectId'], 'String');
      }
      if (data.hasOwnProperty('proofId')) {
        obj['proofId'] = ApiClient.convertToType(data['proofId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Number} unixTimestamp
   */
  exports.prototype['unixTimestamp'] = undefined;
  /**
   * @member {String} objectId
   */
  exports.prototype['objectId'] = undefined;
  /**
   * @member {String} proofId
   */
  exports.prototype['proofId'] = undefined;

  // Implement HashCommon interface:
  /**
   * @member {String} hash
   */
exports.prototype['hash'] = undefined;



  return exports;
}));



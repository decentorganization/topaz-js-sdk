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
    define(['ApiClient', 'model/ObjectCommon'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ObjectCommon'));
  } else {
    // Browser globals (root is window)
    if (!root.TopazApi) {
      root.TopazApi = {};
    }
    root.TopazApi.ObjectOutput = factory(root.TopazApi.ApiClient, root.TopazApi.ObjectCommon);
  }
}(this, function(ApiClient, ObjectCommon) {
  'use strict';




  /**
   * The ObjectOutput model module.
   * @module model/ObjectOutput
   * @version 0.1.17
   */

  /**
   * Constructs a new <code>ObjectOutput</code>.
   * The properties that are included when fetching a list of Objects.
   * @alias module:model/ObjectOutput
   * @class
   * @implements module:model/ObjectCommon
   * @param appId {String} 
   * @param id {String} 
   */
  var exports = function(appId, id) {
    var _this = this;

    ObjectCommon.call(_this);
    _this['appId'] = appId;
    _this['id'] = id;
  };

  /**
   * Constructs a <code>ObjectOutput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ObjectOutput} obj Optional instance to populate.
   * @return {module:model/ObjectOutput} The populated <code>ObjectOutput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      ObjectCommon.constructFromObject(data, obj);
      if (data.hasOwnProperty('appId')) {
        obj['appId'] = ApiClient.convertToType(data['appId'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} appId
   */
  exports.prototype['appId'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  // Implement ObjectCommon interface:


  return exports;
}));



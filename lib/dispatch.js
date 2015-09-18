var Dispatch = module.exports = exports = function(service, options) {
  if (!(this instanceof Dispatch)) return new Dispatch(service, options);

  if (service) {
    this.defaultService = service; 
    this.constructor.prototype._send = require(__dirname + '/services/' + this.defaultService);
    this['_' + this.defaultService] = require(__dirname + '/services/' + this.defaultService);
  }
};

Dispatch.prototype.addService = function(service, options) {
  this.constructor.prototype['_' + service] = require(__dirname + '/services/' + service);
};

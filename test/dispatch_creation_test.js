var expect = require('chai').expect;
var Dispatch = require(__dirname + '/../index');

describe('dispatch', function() {
  it('should be able to be created with a _send function for twilio', function() {
    var dispatch = Dispatch('twilio');
    expect(dispatch._send).to.be.a('function');
    expect(dispatch._twilio).to.be.a('function');
  });

  it('should be able to add another service', function() {
    var dispatch = Dispatch();
    dispatch.addService('twilio');
    expect(dispatch._twilio).to.be.a('function'); 
  });
});

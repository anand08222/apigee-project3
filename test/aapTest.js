var app = require('./app.js');
var assert = require('chai').assert

describe('App', function(){
	it('app should return hello',function(){
		assert.equal(app(),'hello');
	});
	});

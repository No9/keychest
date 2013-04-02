var keychest = require('../');
var assert = require('assert');
var fs = require('fs');
var date = new Date()
var ticks = date.getTime()

keychest.createcertreq("testreq" + ticks, function(nameofnode){ 
	
	console.log(" cert generation complete!");
	fs.exists(process.cwd() + '/certs/' + nameofnode + '.csr', function (exists) {
			assert.ok(exists, "testreq.csr doesn't exist") 
	});
	
	fs.exists(process.cwd() + '/certs/' + nameofnode + '.key', function (exists) {
			assert.ok(exists, "testreq.key doesn't exist") 
			keychest.signrequest(process.cwd() + '/certs/' + nameofnode + '.csr', 
				function() {
					assert.ok(true, "sign request failed");
				});
	});

});



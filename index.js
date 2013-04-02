/*The following options are available:

log: *Bunyan logger or boolean, will default to false
root: *Project root folder will default to process.cwd()
folder: *The certs folder name default to 'certs'
size: *The size used when creating keys, default 4096
subj: *The subj used when creating certificate requests
Subj default:
{
  C:'EE',
  ST:'Harjumaa',
  L:'Tallinn',
  O:'Example',
  OU:'Unit',
  emailAddress:'admin@email.address'
}
*/
var ssl = require('ssl-keygen'); 
var fs = require('fs');

exports.createcertreq = function(nameofnode, cb){
	var opts = { "size" : 2048 }
	
	if(fs.existsSync(process.cwd() + '/keynames.json')){
		opts.subj = JSON.parse(fs.readFileSync(process.cwd() + '/keynames.json', 'utf8'));
		console.log('Config is :');
		console.log(opts)
		//opts.subj = require('./keynames.json')
	}else{
		console.log('Didn\'t find keynames.json in ' + process.cwd() + ' using defaults.')
	}

	var keygen = ssl.createKeyGen(opts);
	keygen.createKey(nameofnode, true, function(){
		keygen.createSignRequest(nameofnode, function(){
			cb(nameofnode);
		});
	});
}

exports.signrequest = function(filelocation, cb){

	var opts = { "size" : 2048 }
	
	if(fs.existsSync(process.cwd() + '/keynames.json')){
		opts.subj = JSON.parse(fs.readFileSync(process.cwd() + '/keynames.json', 'utf8'));
		console.log('Config is :');
		console.log(opts)
		//opts.subj = require('./keynames.json')
	}else{
		console.log('Didn\'t find keynames.json in ' + process.cwd() + ' using defaults.')
	}

	var keygen = ssl.createKeyGen(opts);
	/*
	•@param {String} name name of key
	•@param {Object} ca ca information
	•@param {Boolean} [force=false] whether to force the creation
	•@param {Function} callback
	*/
	keygen.signRequest(filelocation, opts, false, cb)
}

exports.createcacert = function(cb){
/*	signCA

Function for creating a CA cert from key
•@param {String} name name of key
•@param {Boolean} [force=false] whether to force the creation
•@param {Function} callback

*/
	var opts = { "size" : 2048 }
	
	if(fs.existsSync(process.cwd() + '/keynames.json')){
		opts.subj = JSON.parse(fs.readFileSync(process.cwd() + '/keynames.json', 'utf8'));
		console.log('Config is :');
		console.log(opts)
		//opts.subj = require('./keynames.json')
	}else{
		console.log('Didn\'t find keynames.json in ' + process.cwd() + ' using defaults.')
	}

	keygen.createKey('ca', true, function(){
		keygen.signCA('ca.keyfile', false, cb);
	});


	

}

/*Function for creating a RSA key

@param {String} name name of key
@param {Boolean} [force=false] whether to force the creation
@param {Function} callback*/


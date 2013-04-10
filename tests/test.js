var keychest = require('../');
var assert = require('assert');
var fs = require('fs');
var date = new Date()
var ticks = date.getTime()

console.log(" creating CA");

keychest.createcacert(function() {

fs.exists(process.cwd() + '/certs/ca.key', function (exists) {
assert.ok(exists, "ca.key doesn't exist")

console.log(" CA cert ok, creating certificate request");
keychest.createcertreq("testreq" + ticks, function(nameofnode){

fs.exists(process.cwd() + '/certs/' + nameofnode + '.key', function (exists) {
assert.ok(exists, "testreq.key doesn't exist")

fs.exists(process.cwd() + '/certs/' + nameofnode + '.csr', function (exists) {
assert.ok(exists, "testreq.csr doesn't exist")

console.log(" Signing certificate request");
keychest.signrequest(nameofnode, function() {

fs.exists(process.cwd() + '/certs/' + nameofnode + '.crt', function (exists) {
assert.ok(exists, "sign request failed");

}) }) }) }) }) }) });

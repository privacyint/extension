var {Cc, Ci} = require('chrome');
var dns = Cc["@mozilla.org/network/dns-service;1"].getService(Ci.nsIDNSService);

var ipranges = require('./ipranges.js');
var rangesearch = require('./rangesearch.js');

function isNonGBHost(hostname) {

    var record = dns.resolve(hostname, 0);

    while (record && record.hasMore()) {
    }

    return false;

}


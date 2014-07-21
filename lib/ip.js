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

function ipv4StringToInt(ipv4String) {
    var ipv4Parts = ipv4String.split('.');
    return ((((((+ipv4Parts[0])*256)+(+ipv4Parts[1]))*256)+(+ipv4Parts[2]))*256)+(+ipv4Parts[3]);
}

function ipv6StringToBigInt(ipv6String) {
}

exports.ipv4StringToInt = ipv4StringToInt;
exports.ipv6StringToBigInt = ipv6StringToBigInt;

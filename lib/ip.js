var {Cc, Ci} = require('chrome');
var dns = Cc["@mozilla.org/network/dns-service;1"].getService(Ci.nsIDNSService);

var bigInt = require('./ext/BigInteger.min.js');

var ipranges = require('./ipranges.js');
var rangesearch = require('./rangesearch.js');

function isNonGBHost(hostname) {
    try {
        var record = dns.resolve(hostname, 0);
    } catch (NS_ERROR_UNKNOWN_HOST) {
        return false;
    }

    while (record && record.hasMore()) {
        var addr = record.getNextAddrAsString();

        if (addr.indexOf('.') > -1) {
            var addrInt = ipv4StringToInt(addr);

            if (rangesearch.binaryRangeIndexOf(addrInt, ipranges.GBIPv4Ranges) == -1 &&
                rangesearch.binaryRangeIndexOf(addrInt, ipranges.IPv4PrivateRanges) == -1) {
                return true;
            }
        } else {
            var addrBigInt = ipv6StringToBigInt(addr);

            if (rangesearch.binaryRangeIndexOf(addrBigInt, ipranges.GBIPv6Ranges, useBigInt=true) == -1 &&
                rangesearch.binaryRangeIndexOf(addrBigInt, ipranges.IPv6PrivateRanges, useBigInt=true) == -1) {
                return true;
            }
        }
    }

    return false;
}

function ipv4StringToInt(ipv4String) {
    var ipv4Parts = ipv4String.split('.');
    return ((((((+ipv4Parts[0])*256)+(+ipv4Parts[1]))*256)+(+ipv4Parts[2]))*256)+(+ipv4Parts[3]);
}

function ipv6StringToBigInt(ipv6String) {
    if (ipv6String.indexOf('::') > -1) {

        var partsNum = ipv6String.match(/:/g).length;

        if (ipv6String.slice(-2) == '::' || ipv6String.slice(0, 2) == '::') {
            partsNum -= 1;
        }

        ipv6String = ipv6String.replace('::', ':' + Array(9 - partsNum).join('0:'));

        if (ipv6String.slice(-1) == ':') {
            ipv6String = ipv6String.slice(0, -1);
        } else if (ipv6String.slice(0, 1) == ':') {
            ipv6String = ipv6String.slice(1);
        }
    }

    var ipv6Parts = ipv6String.split(':');

    ipv6Parts.forEach(function(part, index) {
        ipv6Parts[index] = Array(5 - part.length).join('0') + part;
    });

    return bigInt(ipv6Parts.join(''), 16).toString();
}

exports.isNonGBHost = isNonGBHost;

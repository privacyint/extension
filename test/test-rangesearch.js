var rangesearch = require('./rangesearch.js');
var ipranges = require('./ipranges.js');

exports['test binaryRangeIndexOf'] = function(assert) {
    assert.ok(rangesearch.binaryRangeIndexOf(34999299, ipranges.GBIPv4Ranges) > -1, "GB IPv4 address found in GB IPv4 address range");
    assert.ok(rangesearch.binaryRangeIndexOf(34999290, ipranges.GBIPv4Ranges) == -1, "non-GB IPv4 address not found in GB IPv4 address range");
    assert.ok(rangesearch.binaryRangeIndexOf("42540613659385265355261104598917578755", ipranges.GBIPv6Ranges, useBigInt=true) > -1, "GB IPv6 address found in GB IPv6 address range");
    assert.ok(rangesearch.binaryRangeIndexOf("42540619363817802085571869850780827646", ipranges.GBIPv6Ranges, useBigInt=true) == -1, "non-GB IPv6 address not found in GB IPv6 range");
}

require('sdk/test').run(exports);

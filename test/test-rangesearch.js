var rangesearch = require('./rangesearch.js');
var ipranges = require('./ipranges.js');

exports['test binaryRangeIndexOf'] = function(assert) {
    assert.ok(rangesearch.binaryRangeIndexOf(34999299, ipranges.GBIPv4Ranges) > -1, "works");
    assert.ok(rangesearch.binaryRangeIndexOf(34999290, ipranges.GBIPv4Ranges) == -1, "works");
    assert.ok(rangesearch.binaryRangeIndexOf("42540613659385265355261104598917578755", ipranges.GBIPv6Ranges, useBigInt=true) > -1, "works");
    assert.ok(rangesearch.binaryRangeIndexOf("42540619363817802085571869850780827646", ipranges.GBIPv6Ranges, useBigInt=true) == -1, "works");
}

require('sdk/test').run(exports);

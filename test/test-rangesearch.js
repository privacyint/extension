var rangesearch = require('./rangesearch.js');
var ipranges = require('./ipranges.js');

exports['test binaryRangeIndexOf'] = function(assert) {
    assert.ok(rangesearch.binaryRangeIndexOf(34999299, ipranges.GBIPv4Ranges) > -1, "works");
    assert.ok(rangesearch.binaryRangeIndexOf(34999290, ipranges.GBIPv4Ranges) == -1, "works");
}

require('sdk/test').run(exports);

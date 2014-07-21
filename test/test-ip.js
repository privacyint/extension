var ip = require('./ip.js');

exports['test ipv4StringToInt'] = function(assert) {
    assert.ok(ip.ipv4StringToInt('1.3.3.7') == 16974599, "works");
}

require('sdk/test').run(exports);

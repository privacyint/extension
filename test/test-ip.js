var ip = require('./ip.js');

exports['test isNonGBHost'] = function(assert) {
    assert.ok(ip.isNonGBHost('google.com') == true, "works; googe.com is non-GB");
    assert.ok(ip.isNonGBHost('bbc.co.uk') == false, "works; bbc.co.uk is GB");
    assert.ok(ip.isNonGBHost('10.1.1.1') == false, "works; 10.1.1.1 is GB");
}

exports['test ipv4StringToInt'] = function(assert) {
    assert.ok(ip.ipv4StringToInt('1.3.3.7') == 16974599, "works; 1.3.3.7 is 16974599 as an int");
}

require('sdk/test').run(exports);

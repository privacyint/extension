var ip = require('./ip.js');

exports['test isNonGBHost'] = function(assert) {
    assert.ok(ip.isNonGBHost('google.com') == true, "googe.com is non-GB");
    assert.ok(ip.isNonGBHost('bbc.co.uk') == false, "bbc.co.uk is GB");
    assert.ok(ip.isNonGBHost('212.58.246.104') == false, "212.58.246.104 is GB");
    assert.ok(ip.isNonGBHost('10.1.1.1') == false, "10.1.1.1 is GB");
    assert.ok(ip.isNonGBHost('ipv6.google.com') == true, "ipv6.google.com is non-GB");
    assert.ok(ip.isNonGBHost('2a00:2381:ffff::1') == false, "2a00:2381:ffff::1 is GB");
    assert.ok(ip.isNonGBHost('::1') == false, "::1 is GB");
    assert.ok(ip.isNonGBHost('blab.blab') == false, "blab.blab (non-existent) is GB");
}

require('sdk/test').run(exports);

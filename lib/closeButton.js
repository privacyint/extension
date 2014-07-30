var ss = require('sdk/simple-storage');

if (typeof ss.storage.closedHostnames === 'undefined') {
    ss.storage.closedHostnames = []
}

function closeHostname(hostname) {
    if (ss.storage.closedHostnames.indexOf(hostname) == -1) {
        ss.storage.closedHostnames.push(hostname);
    }
}

function isClosedHostname(hostname) {
    for (var i = 0; i < ss.storage.closedHostnames.length; i++) {
        var closedHostname = ss.storage.closedHostnames[i];

        if (hostname == closedHostname ||
            hostname.indexOf('.' + closedHostname, hostname.length - ('.' + closedHostname).length) !== -1) {
                return true;
            }
    }

    return false;
}

exports.closeHostname = closeHostname;
exports.isClosedHostname = isClosedHostname;

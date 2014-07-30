function displayBox(message) {
    if ($('#pi_extension_box').length === 0) {
        var box = '<div id="pi_extension_box">' +
            '<a href="https://www.privacyinternational.org/donate" target="_blank"><img id="pi_extension_box_logo" src="' + self.options.pilogoImage + '"></a>' +
            '<div id="pi_extension_box_message"></div>' +
            '<div id="pi_extension_box_close"><a href="#"><img src="' + self.options.closeImage + '"></a></div>' +
            '</div>';

        $('body').append(box);
    }

    $('#pi_extension_box_message').text(message);
}

function determineMessage() {
    for (var hostname in messages) {
        if (matchesHostname(hostname)) {
            return messages[hostname];
        }
    }

    if (hostType === 1) {
        return messages['generic_t1'];
    } else if (hostType == 2) {
        return messages['generic_t2'];
    }
}

function matchesHostname(hostname) {
    if (hostname == window.location.hostname ||
        window.location.hostname.indexOf('.' + hostname, window.location.hostname.length - ('.' + hostname).length) !== -1) {
        return true;
    } else {
        return false;
    }
}

$(document).ready(function() {
    if (window.location.hostname != '' && window.location == window.parent.location) {
        self.port.emit('displayBox', {main: window.location.hostname, resources: getExternalResourcesHostnames()});
    }
});

self.port.on('displayBoxResponse', function(response) {
    if (response > 0) {
        hostType = response;
        if (runRules()) {
            return;
        } else {
            displayBox(determineMessage());
        }
    }
});

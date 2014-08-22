function displayBox(message) {
    if ($('#pi_extension_box').length === 0) {
        var box = '<div id="pi_extension_box">' +

            '<div id="pi_extension_box_body">' +
            '<div id="pi_extension_box_message"></div>' +
            '<div id="pi_extension_box_close"><img src="' + self.options.closeImage + '"></div>' +
            '</div>' +

            '<div id="pi_extension_box_footer">' +
            '<a href="https://www.privacyinternational.org" target="_blank"><img id="pi_extension_box_logo" src="' + self.options.pilogoImage + '"></a>' +
            '<a href="https://www.privacyinternational.org/donate" target="_blank"><img id="pi_extension_box_donate" src="' + self.options.donateImage + '"></a>' +
            '</div>' +

            '</div>';

        $('body').append(box);

        $('#pi_extension_box #pi_extension_box_close img').click(closeBox);
    }

    $('#pi_extension_box #pi_extension_box_message').text(message);
}

function closeBox() {
    self.port.emit('closeHostname', window.location.hostname);
    $('#pi_extension_box').remove();
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

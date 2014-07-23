function displayBox(message) {

    var box = '<div id="pi_extension_box">' +
        '<a href="https://www.privacyinternational.org/donate" target="_blank"><img id="logo" src="' + self.options.pilogoImage + '"></a>' +
        '<div id="message">' + message + '</div>' +
        '<div id="close"><a href="#"><img src="' + self.options.closeImage + '"></a></div>' +
        '</div>';

    $('body').append(box);

}

function determineMessage() {
    if (hostType === 1) {
        return messages['generic_t1'];
    } else if (hostType == 2) {
        return messages['generic_t2'];
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
        displayBox(determineMessage());
    }
});

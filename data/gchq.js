function displayBanner() {

    var banner = '<div id="pi_extension_box">' +
        '<a href="https://www.privacyinternational.org/donate" target="_blank"><img id="logo" src="' + self.options.pilogoImage + '"></a>' +
        '<div id="message">gchq is bad k?</div>' +
        '<div id="close"><a href="#"><img src="' + self.options.closeImage + '"></a></div>' +
        '</div>';

    $('body').append(banner);

}

$(document).ready(function() {
    displayBanner();
});

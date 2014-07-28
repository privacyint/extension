function runRules() {
    if (window.location.hostname == 'www.google.com' ||
        window.location.hostname == 'www.google.co.uk') {
        return googleRule();
    }
}

function googleRule() {
    $(window).on('hashchange', function() {
        if (window.location.hash.lastIndexOf('#q=', 0) === 0) {
            var query = window.location.hash.substring(3).replace('+', ' ');
            $('#pi_extension_box_message').text('"' + query + '" has likely been intercepted by GCHQ and is being analysed as we speak.');
        }
    });
}

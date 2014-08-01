function runRules() {
    if (window.location.hostname == 'www.google.com' ||
        window.location.hostname == 'www.google.co.uk') {
        return googleRule();
    }
}

function googleRule() {
    if ($('#gbqfq').length > 0 &&
        $('#gbqfq').val().length > 0) {
        displayBox('GCHQ believes it has the right to intercept your search for "' + $('#gbqfq').val() + '".');
        return true;
    }

    $(window).on('hashchange', function() {
        if (window.location.hash.lastIndexOf('#q=', 0) === 0) {
            var query = window.location.hash.substring(3).replace('+', ' ');
            if (query.length > 0) {
                displayBox('GCHQ believes it has the right to intercept your search for "' + query + '".');
            }
        }
    });
}


function runRules() {
    if (window.location.hostname == 'www.google.com' ||
        window.location.hostname == 'www.google.co.uk') {
        return googleRule();
    }
}

function googleRule() {
    messageNum = Math.floor(Math.random() * 3);
    if ($('#gbqfq').length > 0 &&
        $('#gbqfq').val().length > 0) {
        displayBox(googleMessage($('#gbqfq').val(), messageNum));
        return true;
    }

    $(window).on('hashchange', function() {
        if (window.location.hash.lastIndexOf('#q=', 0) === 0) {
            var query = window.location.hash.substring(3).replace('+', ' ');
            if (query.length > 0) {
                displayBox(googleMessage(query, messageNum));
            }
        }
    });
}

function googleMessage(query, num) {
    if (num == 0) {
        return 'When you search on Google, Yahoo!, Bing, or DDG: GCHQ\'s mass surveillance program TEMPORA will likely intercept "' + query + '" when you use Google.';
    } else if (num == 1) {
        return 'GCHQ wants to "Master the internet". In one 24-hour period in 2011, more than 39bn events were recorded by GCHQ. They can do this beacause an individual warrant is not needed to intercept your search for "' + query + '".';
    } else if (num == 2) {
        return 'An individual warrant is not needed to intercept this search which is now being processed by GCHQ\'s mass surveillance program TEMPORA examining "' + query + '" against more than 70,000 selectors.';
    }
}

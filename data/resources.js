function getResources() {

    var resources = Array();

    $('*').each(function() {

        var urls = Array();

        urls.push($(this).attr('src'));

        if ($(this).is('object')) {
            urls.push($(this).attr('archive'));
            urls.push($(this).attr('codebase'));
            urls.push($(this).attr('data'));
        }

        if ($(this).is('link')) {
            urls.push($(this).attr('href'));
        }

        urls.forEach(function(url) {
            if (typeof(url) !== 'undefined' && resources.indexOf(url) == -1) {
                resources.push(url);
            }
        });

    });

    return resources;

}

function getResourcesHostnames() {

    var hostnames = Array();

    getResources().forEach(function(resource) {
        hostname = getLocation(resource).hostname;
        if (hostname != '' && hostnames.indexOf(hostname) == -1) {
            hostnames.push(hostname);
        }
    });

    return hostnames;

}

function getExternalResourcesHostnames() {

    var hostnames = getResourcesHostnames();
    var indexOfCurrentHostname = hostnames.indexOf(window.location.hostname);

    if (indexOfCurrentHostname > -1) {
        hostnames.splice(indexOfCurrentHostname, 1);
    }

    return hostnames;

}

function getLocation(href) {
    var loc = document.createElement("a");
    loc.href = href;
    return loc;
}

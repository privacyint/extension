var self = require('sdk/self');
var pageMod = require('sdk/page-mod');

var ip = require('./ip.js');

function startListening(worker) {

    worker.port.on('displayBox', function(hostnames) {
        worker.port.emit('displayBoxResponse', displayBoxResponse(hostnames));
    });

}

function displayBoxResponse(hostnames) {

    if (ip.isNonGBHost(hostnames['main']) == true) {
        return 1;
    }

    for (var i = 0; i < hostnames['resources'].length; ++i) {
        if (ip.isNonGBHost(hostnames['resources'][i]) == true) {
            return 2;
        }
    }

    return 0;

}

pageMod.PageMod({
    include: ['*'],
    contentScriptFile: [self.data.url('ext/jquery-2.1.1.min.js'), self.data.url('resources.js'), self.data.url('messages.js'), self.data.url('specificrules.js'), self.data.url('box.js')],
    contentStyleFile: [self.data.url('box.css')],
    contentScriptOptions: {'pilogoImage': self.data.url('pilogo.png'), 'closeImage': self.data.url('close.png')},
    onAttach: startListening
});


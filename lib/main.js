var self = require('sdk/self');
var pageMod = require('sdk/page-mod');

var ip = require('./ip.js');

function startListening(worker) {

    worker.port.on('displayBox', function(hostnames) {
        worker.port.emit('displayBoxResponse', displayBoxResponse(hostnames));
    });

}

function displayBoxResponse(hostnames) {
    return true;
}

pageMod.PageMod({
    include: ['*'],
    contentScriptFile: [self.data.url('jquery-2.1.1.min.js'), self.data.url('resources.js'), self.data.url('box.js')],
    contentStyleFile: [self.data.url('box.css')],
    contentScriptOptions: {'pilogoImage': self.data.url('pilogo.png'), 'closeImage': self.data.url('close.png')},
    onAttach: startListening
});


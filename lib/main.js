var self = require('sdk/self');
var pageMod = require('sdk/page-mod');

pageMod.PageMod({
    include: ['*'],
    contentScriptFile: [self.data.url('jquery-2.1.1.min.js'), self.data.url('gchq.js')],
    contentStyleFile: [self.data.url('gchq.css')],
    contentScriptOptions: {'pilogoImage': self.data.url('pilogo.png'), 'closeImage': self.data.url('close.png')}
});

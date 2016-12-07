var ConfigClient = module.exports = function ConfigClient(options) {
  this.server = options.server;
  this.app = options.app;
};

ConfigClient.prototype.getEnviroment = function(appEnviroment) {
    var self = this;

    return new Promise(function(resolve, reject) {

        var lib = self.server.startsWith('https') ? require('https') : require('http');
        var request = lib.get(self.server + "/configs/" + self.app + "/" + appEnviroment, function(response) {
            if (response.statusCode < 200 || response.statusCode > 299) {
                reject(new Error('Failed to load page, status code: ' + response.statusCode));
            }

            var body = [];
            response.on('data', function(chunk) { body.push(chunk); } );
            response.on('end', function() { resolve( JSON.parse(body.join('')) ); });
        });

        request.on('error', function(err) { reject(err); });
    });
};

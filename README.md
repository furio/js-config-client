# js-config-client
A simple client for [**js-config-server**](https://github.com/furio/js-config-server)

The client wraps the rest call necessary to obtain the data from the server. It'll evolve depending on the server features.

##Usage example
```
var ConfigLib = require('js-config-client')
var ConfigClient = new ConfigLib({'server':'http://127.0.0.1:3000', 'app':'es-indexer'});
ConfigClient.getEnviroment('dev').then((x)=>{console.log(x);}).catch((err)=>console.log(err);});
```

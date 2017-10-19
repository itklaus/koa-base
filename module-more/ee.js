var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

server.on ('require', function(request) {
  request.approved = true;
});

server.on ('request', function(request) {
  console.log(request);
});

server.emit('request', {from: 'Клиент'});
server.emit('request', {from: 'Еще клиент'});


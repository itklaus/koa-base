
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var config = require('./config');
var log = require('./libs/log')(module);

var app = express();
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');

app.use(express.favicon());
if (app.get('env') == 'development') {
  app.use(express.logger('dev'));
} else {
  app.use(express.logger('default'));
}

app.use(express.json()); 

app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.session({ secret: 'your secret here' }));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
  res.render('index', {
    title: 'To be Young and in love',
    body: '<b>Text body</b>'
  });
});

http.createServer(app).listen(config.get('port'), function(){
  log.info('Express server listening on port ' + config.get('port'));
});

// // Middleware
// app.use(function(req,res, next) {
//   if (req.url == '/') {
//     res.end("Hello");
//   } else {
//     next();
//   }
// });

// app.use(function(req,res,next) {
//   if (req.url == '/admin') {
//     res.send(new Error('wops, denied'));
//   } else {
//     next();
//   }
// });

// app.use(function(req,res,next) {
//   if (req.url == '/test') {
//     res.end('test');
//   } else {
//     next();
//   }
// });

// app.use(function(req,res) {
//   res.send(404, 'Page Not Found Sorry');
// })

app.use(function(err, req, res, next){
  // NODE_ENV = 'production'
  if (app.get('env') == 'development') {
    var errorHandler = express.errorHandler();
    errorHandler(err, req, res, next);
  } else {
    res.send(500);
  }
});

// var routes = require('./routes');
// var user = require('./routes/user');

// // all environments
// app.set('port', process.env.PORT || 3000);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(express.methodOverride());
// app.use(express.session({ secret: 'your secret here' }));
// app.use(app.router);
// app.use(express.static(path.join(__dirname, 'public')));

// // development only
// if ('development' == app.get('env')) {
//   app.use(express.errorHandler());
// }

// app.get('/', routes.index);
// app.get('/users', user.list);

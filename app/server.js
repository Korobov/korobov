// server.js

// server.js

// set up ========================
var express  = require('express');
var app      = express(); 								// create our app w/ express


app.configure(function() {
    app.use(express.static(__dirname)); 		// set the static files location /public/img will be /img for users
    app.use(express.logger('dev')); 						// log every request to the console
    app.use(express.bodyParser()); 							// pull information from html in POST
    app.use(express.methodOverride()); 						// simulate DELETE and PUT
});




// application -------------------------------------------------------------
app.get('*', function(req, res) {
    res.sendfile('index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");

/*
var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('app/index.html');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'html'});
    res.end(index);
}).listen(8888);*/

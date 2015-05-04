var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public', {
    maxAge: 20
}));
//var num = 479890;
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/chart', function(req, res) {

});
io.on('connection', function(socket){
	socket.on('display_chart', function(msg){
		console.log("Server side socket"+msg);
		io.emit('display_chart',msg);
	});
});
server.listen(3000);
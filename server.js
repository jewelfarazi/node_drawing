var io = require('socket.io'),
	connect = require('connect');


var app = connect().use(connect.static('public')).listen(3001);
var node = io.listen(app);

// Delete this row if you want to see debug messages
node.set('log level', 1);

// Listen for incoming connections from clients
node.sockets.on('connection', function (socket) {
	//handler();

	// Start listening for mouse move events
	socket.on('mousemove', function (data) {
		
		// This line sends the event (broadcasts it)
		// to everyone except the originating client.
		socket.broadcast.emit('moving', data);
	});
});
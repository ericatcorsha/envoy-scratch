import { createServer } from 'net';

var server = createServer(function(socket) {
	socket.on('data', function(data) {
		const msg = data.toString();
		console.log("recv " + msg);
		console.log("send " + msg);
		socket.write(data);
	})
});

server.listen(1312, '0.0.0.0');

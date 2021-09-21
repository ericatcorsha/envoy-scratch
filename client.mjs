import { Socket } from 'net';
import { send, recv } from './trace.mjs';

const host = process.env.SERVER_HOST;
const port = 1312;
var intervalID = null;

console.log('Connecting to ' + host + ':' + port)

function tick() {
    const msg = 'Tick: ' + new Date();
    send(msg);
    client.write(msg);
}

var client = new Socket();

client.connect(port, host, function() {
	console.log('Connected');
    intervalID = setInterval(tick, 2000);
});

client.on('data', function(data) {
    const msg = data.toString();
    recv(msg);
});

client.on('close', function() {
    if(intervalID) clearInterval(intervalID);
	console.log('Connection closed');
});

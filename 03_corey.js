var net = require('net');
var server = net.createServer(respond);

function respond(socket) {
    d = new Date();
    socket.end(d.toString());
}
port = process.argv[2];
//TODO check for undefined or bad port
console.log("listening on port ", port);
server.listen(port);
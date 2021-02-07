const server = require('http').createServer();
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:4200"
    }
});

io.on("connection", client => {
    client.on("new-message", (data) => {
        io.emit("new-message", data);
    });
});

server.listen(4201);

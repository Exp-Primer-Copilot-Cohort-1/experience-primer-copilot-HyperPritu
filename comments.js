// Create web server
var express = require('express');
// Create web app
var app = express();
// Create web server
var server = require('http').createServer(app);
// Create socket.io server
var io = require('socket.io')(server);

// Listen to port
server.listen(3000, function(){
    console.log('Server is running...');
});

// Set public folder
app.use(express.static('public'));

// Create socket connection
io.on('connection', function(socket){
    // Listen to 'comment' event
    socket.on('comment', function(data){
        // Send 'comment' event to all clients
        io.emit('comment', data);
    });
});
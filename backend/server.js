const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
        origin: "http://localhost:3000",
        }    
});
io.on('connection', (socket)=>{
    console.log('Socket connection is on with socketID: '+ socket.id);
    socket.on('chat', (data)=>{
        io.emit('chat', data)
        });   
    socket.on('disconnect',(socket)=>console.log('User disconnected'));
            
});
server.listen(4001, ()=>console.log('App running on port 4001'));
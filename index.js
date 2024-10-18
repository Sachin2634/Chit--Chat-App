const express=require('express');
const http = require('http');
const socketio=require('socket.io');
 const app=express();
 const server = http.createServer(app);
 const io=socketio(server)
 //event to connect the conversation
 io.on('connection', (socket) => {
    console.log('a user connected',socket.id);
    });
  });
  

 app.use('/',express.static(__dirname +'/public'));
server.listen(3000,()=>{
    console.log("Server Started");
 });

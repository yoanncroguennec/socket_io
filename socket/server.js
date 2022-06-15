const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})


io.on("connection", (socket) => {
  console.log("Un utilisateur s'est connecté");

  // Envoit et recoit message
  socket.on('chat message', (msg) => {
    // Renvoie le message au Client
    io.emit('chat message', msg);
  });
 
  // Quand un User se déconnecte
  socket.on("disconnect", () => {
    console.log("Un utilisateur s'est déconnecté");
  });  
});


// SERVER
server.listen(3005, () => {
  console.log("Backend server is running!");
});
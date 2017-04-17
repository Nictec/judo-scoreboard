const WebSocket = require('ws'); 

//config 
var port = 8000; 
var clients = []; 

// function sendAll(message){ 
// 	for(var i = 0; i < clients.length; i++){ 
// 		if (clients[i].readyState == clients[0].OPEN){ 
// 			clients[i].send(message);
// 		}
// 	}
// }   

function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

const wss = new WebSocket.Server({ port: port }); 
console.log("Server running at port " + port); 
console.log('Quit with CTRL + C')
console.log("Server Messages: ");
wss.on('connection', function(ws){  
	clients.push(ws);
	console.log("new connection") 
	clients.push(ws); 

	ws.on('message', function incoming(data, flags) {
	broadcast(data); 
	console.log(data); 
	}); 

	ws.on('close', function(client){ 
		clients.splice(clients.indexOf(client), 1); 
		console.log("client disconnected");
	})
}) 




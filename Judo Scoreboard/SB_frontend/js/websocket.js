const socket = new WebSocket('ws://localhost:8000');
var connected = false;
//web socket receiver
socket.addEventListener('open', function (event) { 
	connected = true;
}); 

socket.addEventListener('close', function (event){ 
	connected = false; 
	alert("Verbindung zum Controler verloren! (OK drücken zum neu laden.)");
	location.reload();
});
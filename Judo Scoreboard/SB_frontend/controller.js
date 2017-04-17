const socket = new WebSocket('ws://192.168.0.106:8000');
var connected
socket.addEventListener('open', function (event) {
	connected = true
}); 

socket.addEventListener('close', function (event){ 
	connected = false; 
	alert("connection lost")
}) 





//set default 
	document.getElementById('ipDisp1').innerHTML = 0; 
	document.getElementById('wazaDisp1').innerHTML = 0; 
	document.getElementById('shiDisp1').innerHTML = 0; 
	document.getElementById('ipDisp2').innerHTML = 0; 
	document.getElementById('wazaDisp2').innerHTML = 0; 
	document.getElementById('shiDisp2').innerHTML = 0;
//score functions
function ippon1Add(){  
		if(connected){
    		socket.send('ip1'); 
    		console.log("ip1"); 
    		document.getElementById('ipDisp1').innerHTML++;
    }
} 

function ippon1Remove(){ 
	if(connected){ 
		socket.send('delIp1'); 
		console.log('delIp1'); 
		document.getElementById('ipDisp1').innerHTML--;
	}
} 

function wazari1Add(){ 
	if(connected){ 
		socket.send('wari1'); 
		console.log('wari1'); 
		document.getElementById('wazaDisp1').innerHTML++;
	}
} 

function wazari1Remove(){ 
	if(connected){ 
		socket.send('delWari1'); 
		console.log('delWari1'); 
		document.getElementById('wazaDisp1').innerHTML--;
	}
} 

function shido1Add(){
	if(connected){ 
		socket.send('shi1');  
		console.log('shi1');
		document.getElementById('shiDisp1').innerHTML++;
	}
}

function shido1Remove(){ 
	if(connected){ 
		socket.send('delShi1'); 
		console.log('delShi1'); 
		document.getElementById('shiDisp1').innerHTML--;
	}
}

//Mat 2

function ippon2Add(){  
		if(connected){
    		socket.send('ip2'); 
    		console.log("ip2"); 
    		document.getElementById('ipDisp2').innerHTML++;
    }
} 

function ippon2Remove(){ 
	if(connected){ 
		socket.send('delIp2'); 
		console.log('delIp2'); 
		document.getElementById('ipDisp2').innerHTML--;
	}
} 

function wazari2Add(){ 
	if(connected){ 
		socket.send('wari2'); 
		console.log('wari2'); 
		document.getElementById('wazaDisp2').innerHTML++; 
	}
} 

function wazari2Remove(){ 
	if(connected){ 
		socket.send('delWari2'); 
		console.log('delWari2'); 
		document.getElementById('wazaDisp2').innerHTML--; 
	}
} 

function shido2Add(){
	if(connected){ 
		socket.send('shi2');  
		console.log('shi2'); 
		document.getElementById('shiDisp2').innerHTML++;
	}
}

function shido2Remove(){ 
	if(connected){ 
		socket.send('delShi2'); 
		console.log('delShi2'); 
		document.getElementById('shiDisp2').innerHTML--;
	}
}

function resetAll(){ 
	socket.send('resetAll');
	document.getElementById('ipDisp1').innerHTML = 0; 
	document.getElementById('wazaDisp1').innerHTML = 0; 
	document.getElementById('shiDisp1').innerHTML = 0; 
	document.getElementById('ipDisp2').innerHTML = 0; 
	document.getElementById('wazaDisp2').innerHTML = 0; 
	document.getElementById('shiDisp2').innerHTML = 0;     
}

function toggle(){
	socket.send('time.toggle');
}

//modal
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
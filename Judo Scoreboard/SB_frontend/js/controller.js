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

o1 = false 
o2 = false
function oase1(){ 
	socket.send("oase1") 
	var elm = document.getElementById('d1') 
	if(!o2){
	elm.classList.remove('hidden') 
	o1 = true
	}
}
function oase2(){
	socket.send("oase2") 
	var elm = document.getElementById('d2')
	if(!o1){ 
	elm.classList.remove('hidden') 
	o2=true
	}
}
function oase1Rem(){
	socket.send("oase1Rem") 
	var elm = document.getElementById('d1') 
	elm.classList.add('hidden')
	o1=false
}
function oase2Rem(){
	socket.send("oase2Rem") 
	var elm = document.getElementById('d2') 
	elm.classList.add('hidden') 
	o2=false
}

function matAdd(){
	socket.send('matAdd')
} 
function matSub(){
	socket.send('matSub')
}

function resetAll(){ 
	socket.send('resetAll');
	document.getElementById('ipDisp1').innerHTML = 0; 
	document.getElementById('wazaDisp1').innerHTML = 0; 
	document.getElementById('shiDisp1').innerHTML = 0; 
	document.getElementById('ipDisp2').innerHTML = 0; 
	document.getElementById('wazaDisp2').innerHTML = 0; 
	document.getElementById('shiDisp2').innerHTML = 0; 
	oase1Rem() 
	oase2Rem()     
}

//Timer
function toggle(){
	socket.send('time.toggle')
} 
function setTime2(){
	socket.send("SS2")
}
function setTime3(){ 
	socket.send("SS3"); 
}
function setTime4(){ 
	socket.send("SS4"); 
} 
function setTime5(){ 
	socket.send("SS5"); 
} 
function setTime6(){ 
	socket.send("SS6"); 
} 
function setTime7(){ 
	socket.send("SS7"); 
} 
function setTime8(){ 
	socket.send("SS8"); 
} 
function setTime9(){ 
	socket.send("SS9"); 
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
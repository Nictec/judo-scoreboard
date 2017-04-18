const socket = new WebSocket('ws://192.168.0.106:8000');
var connected 
var bell = document.getElementById('bell'); 
var sieben = document.getElementById('sieben'); 
var thausend = document.getElementById('tausend'); 
var t2 = document.getElementById('t2')
var t3 = document.getElementById('t3')
var t4 = document.getElementById('t4')
var t5 = document.getElementById('t5')
var t6 = document.getElementById('t6')
var t7 = document.getElementById('t7')
var t8 = document.getElementById('t8') 
var t9 = document.getElementById('t9')
socket.addEventListener('open', function (event) {
	connected = true
}); 

socket.addEventListener('close', function (event){ 
	connected = false; 
	alert("connection lost")
}) 

socket.addEventListener('message', function(event){
	if(event.data === "oaseIppon1"){
		document.getElementById('ipDisp1').innerHTML++;
	}
	if(event.data === "oaseIppon2"){
		document.getElementById('ipDisp2').innerHTML++;
	}
})



//set default 
	document.getElementById('ipDisp1').innerHTML = 0; 
	document.getElementById('wazaDisp1').innerHTML = 0; 
	document.getElementById('shiDisp1').innerHTML = 0; 
	document.getElementById('ipDisp2').innerHTML = 0; 
	document.getElementById('wazaDisp2').innerHTML = 0; 
	document.getElementById('shiDisp2').innerHTML = 0; 
	bell.classList.remove('active'); 
	sieben.classList.add('active') 
	thausend.classList.remove('active')
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
	t2.classList.add("active") 
	t3.classList.remove("active") 
	t4.classList.remove("active") 
	t5.classList.remove("active") 
	t6.classList.remove("active") 
	t7.classList.remove("active") 
	t8.classList.remove("active") 
	t9.classList.remove("active") 
}
function setTime3(){ 
	socket.send("SS3"); 
	t2.classList.remove("active") 
	t3.classList.add("active") 
	t4.classList.remove("active") 
	t5.classList.remove("active") 
	t6.classList.remove("active") 
	t7.classList.remove("active") 
	t8.classList.remove("active") 
	t9.classList.remove("active") 
}
function setTime4(){ 
	socket.send("SS4"); 
	t2.classList.remove("active") 
	t3.classList.remove("active") 
	t4.classList.add("active") 
	t5.classList.remove("active") 
	t6.classList.remove("active") 
	t7.classList.remove("active") 
	t8.classList.remove("active") 
	t9.classList.remove("active")  
} 
function setTime5(){ 
	socket.send("SS5"); 
	t2.classList.remove("active") 
	t3.classList.remove("active") 
	t4.classList.remove("active") 
	t5.classList.add("active") 
	t6.classList.remove("active") 
	t7.classList.remove("active") 
	t8.classList.remove("active") 
	t9.classList.remove("active") 
} 
function setTime6(){ 
	socket.send("SS6"); 
	t2.classList.remove("active") 
	t3.classList.remove("active") 
	t4.classList.remove("active") 
	t5.classList.remove("active") 
	t6.classList.add("active") 
	t7.classList.remove("active") 
	t8.classList.remove("active") 
	t9.classList.remove("active")  
} 
function setTime7(){ 
	socket.send("SS7"); 
	t2.classList.remove("active") 
	t3.classList.remove("active") 
	t4.classList.remove("active") 
	t5.classList.remove("active") 
	t6.classList.remove("active") 
	t7.classList.add("active") 
	t8.classList.remove("active")
	t9.classList.remove("active")  
} 
function setTime8(){ 
	socket.send("SS8"); 
	t2.classList.remove("active") 
	t3.classList.remove("active") 
	t4.classList.remove("active") 
	t5.classList.remove("active") 
	t6.classList.remove("active") 
	t7.classList.remove("active") 
	t8.classList.add("active")
	t9.classList.remove("active") 
} 
function setTime9(){ 
	socket.send("SS9"); 
	socket.send("SS8"); 
	t2.classList.remove("active") 
	t3.classList.remove("active") 
	t4.classList.remove("active") 
	t5.classList.remove("active") 
	t6.classList.remove("active") 
	t7.classList.remove("active") 
	t8.classList.remove("active")
	t9.classList.add("active")  
} 
function logoOn(){
	socket.send("logoON")
}
function logoOFF(){
	socket.send("logoOFF")
} 
function Bell(){
	socket.send('SoundBell') 
	bell.classList.add('active'); 
	sieben.classList.remove('active') 
	thausend.classList.remove('active')
}
function siebenhundert(){
	socket.send('SoundSeven') 
	bell.classList.remove('active'); 
	sieben.classList.add('active') 
	thausend.classList.remove('active')
}
function tausend(){
	socket.send('SoundTausend') 
	bell.classList.remove('active'); 
	sieben.classList.remove('active') 
	thausend.classList.add('active')
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
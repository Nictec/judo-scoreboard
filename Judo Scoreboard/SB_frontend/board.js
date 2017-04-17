const socket = new WebSocket('ws://localhost:8000');
var connected = false;
//web socket receiver
socket.addEventListener('open', function (event) { 
	connected = true;
});

 socket.addEventListener('message', function(event){ 
    	if(event.data === 'ip1'){ 
    		ippon1Add(); 
    		console.log(event.data);
    	}; 
    	if(event.data === "delIp1"){ 
    		ippon1Remove(); 
    		console.log(event.data);
    	}; 
    	if(event.data === 'wari1'){ 
    		wazari1Add(); 
    		console.log(event.data);
    	} 
    	if(event.data === 'delWari1'){ 
    		wazari1Remove(); 
    		console.log(event.data);
    	} 
    	if(event.data === 'shi1'){ 
    		shido1Add()
    	} 
    	if(event.data === 'delShi1'){ 
    		shido1Remove()
    	}

    	//Mat2

    	if(event.data === 'ip2'){ 
    		ippon2Add(); 
    		console.log(event.data);
    	}; 
    	if(event.data === "delIp2"){ 
    		ippon2Remove(); 
    		console.log(event.data);
    	}; 
    	if(event.data === 'wari2'){ 
    		wazari2Add(); 
    		console.log(event.data);
    	} 
    	if(event.data === 'delWari2'){ 
    		wazari2Remove(); 
    		console.log(event.data);
    	} 
    	if(event.data === 'shi2'){ 
    		shido2Add()
    	} 
    	if(event.data === 'delShi2'){ 
    		shido2Remove()
    	} 
    	if(event.data === 'resetAll'){ 
    		resetAll()
    	}
    })  

//timer 
var fightTime = new Timer(); 
var inputTime = 2; 
var startTime = inputTime * 60; 
var gong = new Audio('/sounds/Bell.mp3'); 

function start(){ 
	console.log("timer`s running")
	fightTime.start(startTime).on('end', function(){ 
		gong.play(); 
		console.log("time´s up")
	});
} 

function pause(){ 
	fightTime.pause()
}

 //set default values 
 resetAll();
 //Dom functions

function wazari1Add(){ 
	var element = document.getElementById('wari1');
	element.innerHTML ++;
} 

function wazari2Add(){ 
	var element = document.getElementById('wari2');
	element.innerHTML ++;
} 

function wazari1Remove(){ 
	var element = document.getElementById('wari1');
	element.innerHTML --;
} 

function wazari2Remove(){ 
	var element = document.getElementById('wari2');
	element.innerHTML --;
} 

function ippon1Add(){ 
	var element = document.getElementById('ip1');
	element.innerHTML ++;
} 

function ippon2Add(){ 
	var element = document.getElementById('ip2');
	element.innerHTML ++;
} 

function ippon1Remove(){ 
	var element = document.getElementById('ip1');
	element.innerHTML --;
} 

function ippon2Remove(){ 
	var element = document.getElementById('ip2');
	element.innerHTML --;
} 

function shido1Add(){ 
	var element = document.getElementById('shi1');
	element.innerHTML ++;
}  

function shido2Add(){ 
	var element = document.getElementById('shi2');
	element.innerHTML ++;
} 

function shido1Remove(){ 
	var element = document.getElementById('shi1');
	element.innerHTML --;
}

function shido2Remove(){ 
	var element = document.getElementById('shi2');
	element.innerHTML --;
}

function resetAll(){ 
 document.getElementById('wari1').innerHTML = 0; 
 document.getElementById('ip1').innerHTML = 0; 
 document.getElementById('wari2').innerHTML = 0; 
 document.getElementById('ip2').innerHTML = 0; 
 document.getElementById('shi1').innerHTML = 0; 
 document.getElementById('shi2').innerHTML = 0
}


//toggle fulscreen mode
	function fs() {
    var el = document.documentElement,
      rfs = el.requestFullscreen
        || el.webkitRequestFullScreen
        || el.mozRequestFullScreen
        || el.msRequestFullscreen 
    ;

    rfs.call(el);
};






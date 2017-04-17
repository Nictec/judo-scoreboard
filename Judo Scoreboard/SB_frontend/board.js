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
        if(event.data === 'time.toggle'){
            toggle()
        }
    })  
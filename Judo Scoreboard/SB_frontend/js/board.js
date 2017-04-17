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

        //global 
    	if(event.data === 'resetAll'){ 
    		resetAll()
    	} 
        if(event.data === 'time.toggle'){
            toggle()
        }
        if(event.data === 'SS2'){
            setTimer(2)
        } 
        if(event.data === 'SS3'){
            setTimer(3) 
        } 
        if(event.data === 'SS4'){
            setTimer(4)
        } 
        if(event.data === 'SS5'){
            setTimer(5)
        }
        if(event.data === 'SS6'){
            setTimer(6)
        }
        if(event.data === 'SS7'){
            setTimer(7)
        } 
        if(event.data === 'SS8'){
            setTimer(8)
        }
        if(event.data === 'SS9'){
            setTimer(9)
        } 
        if(event.data === 'oase1'){
            oase1()
        } 
        if(event.data === 'oase2'){
            oase2()
        }
        if(event.data === 'oase1Rem'){
            oase1Rem()
        }
        if(event.data === 'oase2Rem'){
            oase2Rem()
        }
    })  
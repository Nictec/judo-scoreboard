  //Timer 
  $('#runner').runner({ 
    autostart: false,
    countdown: true, 
    milliseconds: false, 
    stopAt: 000000,
    startAt: localStorage.getItem("fightTime") // alternatively you could just write: 60*1000
}); 
  function toggle(){ 
    $('#runner').runner('toggle');
  } 
  function resetTimer(){ 
    $('#runner').runner('stop');
    $('#runner').runner('reset');
  }
  function setTimer(value){
    localStorage.setItem("fightTime", value*60*1000); 
    location.reload()
    return localStorage.getItem("fightTime");
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

function oase1(){
  var elm = document.getElementById('oase1')
  elm.classList.remove('hidden');
} 

function oase2(){
  var elm = document.getElementById('oase2')
  elm.classList.remove('hidden');
}

function oase1Rem(){
  var elm = document.getElementById('oase1') 
  elm.classList.add('hidden');
}

function oase2Rem(){
  var elm = document.getElementById('oase2') 
  elm.classList.add('hidden');
}



function resetAll(){ 
 document.getElementById('wari1').innerHTML = 0; 
 document.getElementById('ip1').innerHTML = 0; 
 document.getElementById('wari2').innerHTML = 0; 
 document.getElementById('ip2').innerHTML = 0; 
 document.getElementById('shi1').innerHTML = 0; 
 document.getElementById('shi2').innerHTML = 0 
 resetTimer();
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


  //Timers
  var o1 = false 
  var o2 = false 
  var tori
  var gong = new Audio('sounds/700Hz.wav');

  $('#runner').runner({ 
    autostart: false,
    countdown: true, 
    milliseconds: false, 
    stopAt: 000000,
    startAt: localStorage.getItem("fightTime") // alternatively you could just write: 60*1000
}).on('runnerFinish', function(eventObject, info){
  gong.play();
}) 
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

function oaseIppon(tori){ 
  if(tori === 1){
    var element = document.getElementById('ip1');
    element.innerHTML ++;
  }else{
      var element = document.getElementById('ip2');
      element.innerHTML ++;
  }
}

  $('#okTime').runner({
    autostart: false, 
    milliseconds: false, 
    stopAt: 20000,
  }).on('runnerFinish', function(eventObject, info){
      oaseIppon(tori); 
      $('#runner').runner('stop'); 
      socket.send("oaseIppon"+tori)
      gong.play();
  })

  function startOK(){
    $('#okTime').runner('start');
  } 

  function resetOK(){
     $('#okTime').runner('stop');
     $('#okTime').runner('reset');
  }
 //set default values 
 resetAll(); 
 document.getElementById('mat').innerHTML = 1 
 document.getElementById('matt').innerHTML = 1
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

function matAdd(){
  elm = document.getElementById('mat');
  elm.innerHTML ++; 
  document.getElementById('matt').innerHTML ++;
}

function matSub(){
  elm = document.getElementById('mat');
  elm.innerHTML --;
  document.getElementById('matt').innerHTML --;
}

function oase1(){
  if(!o2){
    startOK()
    var elm = document.getElementById('oase1')
    elm.classList.remove('hidden'); 
    o1 = true; 
    tori = 1 
  }
} 

function oase2(){
  if(!o1){ 
    startOK()
    var elm = document.getElementById('oase2')
    elm.classList.remove('hidden'); 
    o2 = true
    tori = 2
  }
}

function oase1Rem(){ 
  resetOK()
  var elm = document.getElementById('oase1') 
  elm.classList.add('hidden');
  o1 = false
}

function oase2Rem(){ 
  resetOK()
  var elm = document.getElementById('oase2') 
  elm.classList.add('hidden'); 
  o2 = false
}

function setSound(name){
  gong = new Audio('sounds/'+name);
}



function resetAll(){ 
 document.getElementById('wari1').innerHTML = 0; 
 document.getElementById('ip1').innerHTML = 0; 
 document.getElementById('wari2').innerHTML = 0; 
 document.getElementById('ip2').innerHTML = 0; 
 document.getElementById('shi1').innerHTML = 0; 
 document.getElementById('shi2').innerHTML = 0; 
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

//modal 
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function open() {
    modal.style.display = "block"; 
    if( window.innerHeight == screen.height) {
    var elm = document.getElementById('pImage'); 
    var matid = document.getElementById('matid');
    elm.classList.add('fullscreen'); 
    elm.classList.add('matid');

  }
}

// When the user clicks on <span> (x), close the modal
function close() {
    modal.style.display = "none";
}

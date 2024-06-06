setCenterPosition(document.getElementById("login-div"));

document.addEventListener("DOMContentLoaded", function() {
  const startButton = document.getElementById("login-button");
  const logindiv = document.getElementById("login-div");
  const audio = document.getElementById("start-audio");
  const elementsToShow = [
    document.getElementById("icons"),
    document.getElementById("to-drag1"),
    document.getElementById("taskbar")
  ];

  startButton.addEventListener("click", function() {
      audio.play();
      logindiv.style.display = 'none';

      let delay = 0;
      elementsToShow.forEach((element, index) => {
          setTimeout(() => {
              element.style.visibility = 'visible';
          }, delay);
          delay += 100;
      });
  });
});

/*

document.addEventListener("DOMContentLoaded", function() {
  const logindiv = document.getElementById("login-div");
  logindiv.style.display = 'none';
  const elementsToShow = [
    document.getElementById("icons"),
    document.getElementById("to-drag1"),
    document.getElementById("taskbar")
  ];

  let delay = 0;
  elementsToShow.forEach((element, index) => {
    setTimeout(() => {
      element.style.visibility = 'visible';
    }, delay);
    delay += 0;  // Adjust the interval delay as needed
  });
});

*/

// after start

dragElement(document.getElementById("to-drag1"));
dragElement(document.getElementById("to-drag2"));
dragElement(document.getElementById("to-drag3"));
dragElement(document.getElementById("techtip"));

setInitialPosition(document.getElementById("to-drag1"));
setInitialPosition(document.getElementById("to-drag2"));
setInitialPosition(document.getElementById("techtip"));
setInitialBlogPosition(document.getElementById("to-drag3"));
setCenterPosition(document.getElementById("to-drag5"));

function setInitialPosition(elmnt) {
  var randomOffset = 150; // pixels of randomness
  var centerX = window.innerWidth / 2 - elmnt.offsetWidth / 2;
  var centerY = window.innerHeight / 2 - elmnt.offsetHeight / 2;
  var randomX = centerX + (Math.random() * randomOffset - randomOffset / 2);
  var randomY = centerY + (Math.random() * randomOffset - randomOffset / 2);
  elmnt.style.left = randomX + 'px';
  elmnt.style.top = randomY + 'px';
}

function setCenterPosition(elmnt) {
  var randomOffset = 0; // pixels of randomness
  var centerX = window.innerWidth / 2 - elmnt.offsetWidth / 2;
  var centerY = window.innerHeight / 2 - elmnt.offsetHeight / 2;
  var randomX = centerX + (Math.random() * randomOffset - randomOffset / 2);
  var randomY = centerY + (Math.random() * randomOffset - randomOffset / 2);
  elmnt.style.left = randomX + 'px';
  elmnt.style.top = randomY + 'px';
}

function setInitialBlogPosition(elmnt) {
  var randomOffset = 10; // pixels of randomness
  var centerX = window.innerWidth / 2 - elmnt.offsetWidth / 2;
  var centerY = window.innerHeight / 2 - elmnt.offsetHeight / 2;
  var randomX = centerX + (Math.random() * randomOffset - randomOffset / 2);
  var randomY = centerY + (Math.random() * randomOffset - randomOffset / 2);
  elmnt.style.left = randomX + 'px';
  elmnt.style.top = randomY + 'px';
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
    var newTop = elmnt.offsetTop - pos2;
    var newLeft = elmnt.offsetLeft - pos1;
    
    var minTop = 0;
    var minLeft = 0;
    var maxTop = window.innerHeight - elmnt.offsetHeight;
    var maxLeft = window.innerWidth - elmnt.offsetWidth;
    
    if (newTop < minTop) newTop = minTop;
    if (newLeft < minLeft) newLeft = minLeft;
    if (newTop > maxTop) newTop = maxTop;
    if (newLeft > maxLeft) newLeft = maxLeft;

    elmnt.style.top = newTop + "px";
    elmnt.style.left = newLeft + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function updateTime() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();

  if (minutes < 10) {
      minutes = '0' + minutes;
  }

  let period = 'AM';
  if (hours >= 12) {
      period = 'PM';
      if (hours > 12) {
          hours -= 12;
      }
  }
  if (hours === 0) {
      hours = 12;
  }

  let currentTime = `${hours}:${minutes} ${period}`;
  let clock = document.getElementById('taskbar-clock');

  if (clock) {
      clock.innerHTML = currentTime;
  }
}

updateTime();
setInterval(updateTime, 6000);

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('close1');
  const element = document.getElementById('to-drag1');

  button.addEventListener('click', function () {
      element.style.visibility = 'hidden';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('close2');
  const element = document.getElementById('to-drag2');

  button.addEventListener('click', function () {
      element.style.visibility = 'hidden';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('close3');
  const element = document.getElementById('to-drag3');

  button.addEventListener('click', function () {
      element.style.visibility = 'hidden';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('close5');
  const element = document.getElementById('to-drag5');

  button.addEventListener('click', function () {
      element.style.visibility = 'hidden';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('start-icon');
  const element = document.getElementById('start-menu');

  button.addEventListener('click', function () {
      if (element.style.visibility == 'hidden'){
        element.style.visibility = 'visible';
      }
      else {
        element.style.visibility = 'hidden';
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('entertechtip');
  const element = document.getElementById('techtip');
  const audio = document.getElementById('funky-town');

  button.addEventListener('click', function () {
      if (element.style.visibility == 'hidden'){
        element.style.visibility = 'visible';
        audio.volume = 0.4;
        audio.play();
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('menu-1');
  const element = document.getElementById('to-drag1');

  button.addEventListener('click', function () {
      if (element.style.visibility == 'hidden'){
        element.style.visibility = 'visible';
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('menu-2');
  const element = document.getElementById('to-drag2');

  button.addEventListener('click', function () {
      if (element.style.visibility == 'hidden'){
        element.style.visibility = 'visible';
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('menu-3');
  const element = document.getElementById('to-drag3');

  button.addEventListener('click', function () {
      if (element.style.visibility == 'hidden'){
        element.style.visibility = 'visible';
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('menu-5');
  const element = document.getElementById('to-drag5');

  button.addEventListener('click', function () {
      if (element.style.visibility == 'hidden'){
        element.style.visibility = 'visible';
      }
  });
});



const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let painting = false;
let tool = 'pencil';
let draggable = true;

canvas.width = canvas.parentElement.clientWidth;
canvas.height = canvas.parentElement.clientHeight;

document.getElementById('pencil').addEventListener('click', () => {
  tool = 'pencil';
});

document.getElementById('eraser').addEventListener('click', () => {
  tool = 'eraser';
});

canvas.addEventListener('mousedown', () => {
  painting = true;
});

canvas.addEventListener('mouseup', () => {
  painting = false;
  context.beginPath();
});

canvas.addEventListener('mousemove', (event) => {
  if (!painting) return;
  context.lineWidth = tool === 'pencil' ? 2 : 10;
  context.lineCap = 'round';
  context.strokeStyle = tool === 'pencil' ? 'black' : 'white';
  context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
  context.stroke();
  context.beginPath();
  context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
});

canvas.addEventListener('mouseenter', () => {
  draggable = false;
});

canvas.addEventListener('mouseleave', () => {
  draggable = true;
});

specialdragElement(document.getElementById("to-drag5"));

function specialdragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    if (!draggable) return;
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
      
    var newTop = elmnt.offsetTop - pos2;
    var newLeft = elmnt.offsetLeft - pos1;
      
    var minLeft = 0;
    var minTop = 0;
    var maxLeft = window.innerWidth - elmnt.offsetWidth;
    var maxTop = window.innerHeight - elmnt.offsetHeight;
      
    if (newLeft < minLeft) newLeft = minLeft;
    if (newTop < minTop) newTop = minTop;
    if (newLeft > maxLeft) newLeft = maxLeft;
    if (newTop > maxTop) newTop = maxTop;
    elmnt.style.left = newLeft + "px";
    elmnt.style.top = newTop + "px";
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
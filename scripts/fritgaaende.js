function dragstartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id); /*gets id of the element you*/
  document.getElementById("bg1").innerHTML = "<img src='images/bg-game.png'>";
  document.getElementById("bg2").innerHTML = "<img src='images/bg-game.png'>";
  document.getElementById("bg3").innerHTML = "<img src='images/bg-game.png'>";
  document.getElementById("bg4").innerHTML = "<img src='images/bg-game.png'>";
  document.getElementById("bg5").innerHTML = "<img src='images/bg-game.png'>";
  document.getElementById("bg6").innerHTML = "<img src='images/bg-game.png'>";
  document.getElementById("bg7").innerHTML = "<img src='images/bg-game.png'>";
  document.getElementById("bg8").innerHTML = "<img src='images/bg-game.png'>";
}

function dragoverHandler(ev) {
  ev.preventDefault();
}


function dropHandler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function dropHandler1(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  document.getElementById("bg1").innerHTML = "<img src='images/opvoksning-oko.svg'>";
}

function dropHandler2(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  document.getElementById("bg2").innerHTML = "<img src='images/opvoksning-kon.svg'>";
}

function dropHandler3(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  document.getElementById("bg3").innerHTML = "<img src='images/foder-oko.svg'>";
}

function dropHandler4(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  document.getElementById("bg4").innerHTML = "<img src='images/opvoksning-oko.svg'>";
}

function dropHandler5(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  document.getElementById("bg5").innerHTML = "<img src='images/opvoksning-oko.svg'>";
}

function dropHandler6(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  document.getElementById("bg6").innerHTML = "<img src='images/opvoksning-oko.svg'>";
}

function dropHandler7(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  document.getElementById("bg7").innerHTML = "<img src='images/opvoksning-oko.svg'>";
}

function dropHandler8(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  document.getElementById("bg8").innerHTML = "<img src='images/opvoksning-oko.svg'>";
}
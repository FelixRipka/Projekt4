function dragstartHandler(ev) {
  ev.dataTransfer.setData("text", ev.target.id); /*gets id of the element you*/
}

function dragoverHandler(ev) {
  ev.preventDefault();
}


function dropHandler(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  document.getElementById("bg1").innerHTML = "<img src='images/opvoksning-oko.png'>";
}
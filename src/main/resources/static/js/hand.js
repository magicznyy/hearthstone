window.addEventListener('load',printCards)

function printCards() {
var text = ""
for(var i=0;i<=7;i++)
  text += "<div id = card" + i  + " class=\"card\" draggable=\"true\"><img src=/images/card1.png alt=\"cameleon\"></div>"

  document.getElementById("hand").innerHTML = text;
}
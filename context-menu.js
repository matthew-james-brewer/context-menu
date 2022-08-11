// for earlier versions of IE:
document.createElement("context-menu");

function menu(id) {
var element = document.getElementById(id);
window.open("#"+id, "_self"); //to get to the menu
element.style.display = "block";
var tag = document.createElement("h1");
var text = document.createTextNode(id);
tag.appendChild(text);
element.appendChild(tag);
}

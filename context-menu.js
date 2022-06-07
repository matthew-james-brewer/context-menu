// for earlier versions of IE:
document.createElement("context-menu");

function menu(id) {
window.open("#"+id, "_self"); //to get to the menu
document.getElementById(id).style.display = "block";
}

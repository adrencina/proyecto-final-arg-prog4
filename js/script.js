
function sobreicon(){
  document.getElementsByTagName("i").style.color = "black";
}

function nosobreicon(){
  document.getElementsByTagName("i").style.color = "blue";
}





document.getElementsByTagName("i").onmouseover = sobreicon;

document.getElementsByTagName("i").onmouseout = nosobreicon;
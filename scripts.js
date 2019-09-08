function dropdownButton() {
  var x = document.getElementById("dropdownButtonCall");
  if (x.className.indexOf("dropdownShow") == -1) {  
    x.className += " dropdownShow";
  } else { 
    x.className = x.className.replace(" dropdownShow", "");
  }
}
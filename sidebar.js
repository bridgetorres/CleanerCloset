
function myFunction(x) {
    x.classList.toggle("change");
}


function sidebar(){
  console.log("work")
  var x = document.getElementById("icon-bar");

  if(x.style.display == "block"){
    x.style.display = "none";
  }else{
    x.style.display = "block";
  }
}

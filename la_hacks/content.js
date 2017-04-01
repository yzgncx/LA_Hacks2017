
window.onload = onPageLoad();

function onPageLoad() {
	if (typeof(Storage) !== "undefined") {
	if(localStorage.using == undefined)
	{
		localStorage.setItem("using", 0);
	}else{
		
	}
} else {
    // Sorry! No Web Storage support..
}
  if(localStorage.getItem("using") == 0)
  {
		document.getElementById("power").checked = 0;
  }
  else
  {
		document.getElementById("power").checked = 1;
  }
}


	var messWithPeeps = document.getElementById("power").checked;
if(messWithPeeps)
{
	alert("mess with peeps");
}
function messWithCongress()
{
	
	var check = document.getElementById("power").checked;
	if(check == false)
  {
	localStorage.setItem("using", 0);
  }
  else
  {
	localStorage.setItem("using", 1);
  }
	  
	if(check == true)
	{
		
		alert("Button has been pressed");	
		//this is where we can put shit to run if the button is checked
		
	}
}
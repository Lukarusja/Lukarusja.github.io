function myFunction(classin){
	document.getElementById(classin).classList.toggle("show");
	if(document.getElementById(classin).classList.contains("show")){
		window.scrollBy(0,300);
	}
}
function changeText(){
	document.getElementById("p1").innerHTML = "BEEP BOOP";//'<object data = "assets/goalsheet.txt"/>'
}
function changeSize(idIn){
	if(document.getElementById(idIn).style.width != "90%")
		document.getElementById(idIn).style.width = "90%";
	else
	document.getElementById(idIn).style.width = "40%";
}
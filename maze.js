function  setUpEvent(){
	var Touch = document.getElementById("boundary1");

	Touch.onmouseover =function(){
		Touch.classList.add("youlose");
	}

}

window.onload = function(){ 
	setUpEvent();
}
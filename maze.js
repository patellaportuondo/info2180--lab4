function  setUpEvent(){
	var touch = document.getElementById("boundary1");
	var bound = document.querySelectorAll(".boundary");
	
	touch.onmouseover =function(){
		touch.classList.add("youlose");
	}
	for (var i = 0; i < bound.length-1; i++) {
		bound[i].onmouseover= function(){
			for (var i = 0; i < bound.length-1; i++) {
				bound[i].classList.add("youlose");
			}
		}

	}


}

window.onload = function(){ 
	setUpEvent();

}
function  setUpEvent(){
	var touch = document.getElementById("boundary1");
	var bound = document.querySelectorAll(".boundary");
	var end = document.getElementById("end");
	var reset =document.getElementById("start");

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
	end.onmouseover=function(){
		if (touch.getAttribute("class")=="boundary") {
			console.log("YOU WIN!");
		}else{ 
			console.log("YOU LOSE !")

		}
	}

	reset.onclick=function(){
		for (var i = 0; i < bound.length-1; i++) {
			bound[i].setAttribute("class", "boundary");
		}
	}

}

window.onload = function(){ 
	setUpEvent();

}
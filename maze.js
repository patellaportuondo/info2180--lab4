function  setUpEvent(){
	var touch = document.getElementById("boundary1");
	var bound = document.querySelectorAll(".boundary");
	var end = document.getElementById("end");
	var reset =document.getElementById("start");
	var status = document.getElementById("status");
	var cheat = document.getElementById("maze");

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
			status.innerHTML = "YOU WIN !";
		}else{ 
			status.innerHTML= "YOU LOSE !";

		}
	}

	reset.onclick=function(){
		status.innerHTML = 'Move your mouse over the "S" to begin.';
		for (var i = 0; i < bound.length-1; i++) {
			bound[i].setAttribute("class", "boundary");
		}
		cheat.onmouseleave=function(){
			for (var i = 0; i < bound.length-1; i++) {
				bound[i].classList.add("youlose");
			}
		}
	}
}



window.onload = function(){ 
	setUpEvent();
}
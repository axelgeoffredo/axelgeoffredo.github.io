//Create function where losses can be expanded & closed
let lossbtn = document.getElementById("loss-btn") 
lossbtn.onclick = function() {
    let losses = document.getElementsByClassName("losses-container");
	for (let i = 0; i < losses.length; i++) {
		losses[i].classList.toggle("hide");

	}
};


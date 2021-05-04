function darkmode() {
	
	
	var image = document.getElementById("moon");
	var element = document.body;

	if (image.src.match("moon")) {
		image.src = "Images/sun.svg";
		element.classList.toggle("dark-mode");
	}

	else {
		image.src = "Images/moon.svg";
		element.classList.toggle("light-mode");
	}
}

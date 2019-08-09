window.onload = function() {

	// Background color change for navigation
	var hero = document.getElementById('hero');
	var nav_colors = document.getElementsByClassName("nav_color");

	for (var i = 0; i < nav_colors.length; i++) {
		nav_colors[i].addEventListener('mouseenter', function () {
			hero.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
		});
		nav_colors[i].addEventListener('mouseleave', function () {
			hero.style.backgroundColor = "#9ed2cf";
		});
	}

	
}


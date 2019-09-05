window.onload = function() {
	
	// Hero content & background color change (coordination with navigation)
	var main_hero = document.getElementById("main_hero");
	var tales = document.getElementById("hero_1");
	var games = document.getElementById("hero_2");
	var drawings = document.getElementById("hero_3");
	var shop = document.getElementById("hero_4");
	var hero = document.getElementById('hero');
	var nav_colors = document.getElementsByClassName("nav_color");

	for (var i = 0; i < nav_colors.length; i++) {
		nav_colors[i].addEventListener('mouseenter', function () {
			hero.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
			main_hero.style.display = 'none';
			switch (this.dataset.name) {
				case 'tales':
					tales.style.display = 'flex';
					break;
				case 'games':
					games.style.display = 'flex';
					break;
				case 'drawings':
					drawings.style.display = 'flex';
					break;
				case 'shop':
					shop.style.display = 'flex';
					break;
				default:
					main_hero.style.display = 'flex';
			}
		});
		nav_colors[i].addEventListener('mouseleave', function () {
			hero.style.backgroundColor = "#9ed2cf";
			main_hero.style.display = 'flex';
			tales.style.display = 'none';
			games.style.display = 'none';
			drawings.style.display = 'none';
			shop.style.display = 'none';
		});
	}

	// Hamburger menu
	var pointer_1 = document.getElementById("pointer_1");
	var pointer_2 = document.getElementById("pointer_2");
	$(document).delegate('.open', 'click', function(event){
		$(this).addClass('openned');
		pointer_1.style.display = 'none';
		pointer_2.style.display = 'none';
		event.stopPropagation();
	})
	$(document).delegate('body', 'click', function(event) {
		$('.open').removeClass('openned');
		setTimeout(pointer_come_back, 1000);
	})
	$(document).delegate('.cls', 'click', function(event){
		$('.open').removeClass('openned');
		setTimeout(pointer_come_back, 1000);
		event.stopPropagation();
	});

	function pointer_come_back() {
		pointer_1.style.display = 'block';
		pointer_2.style.display = 'block';
	}
	// Hero content change
	/*var fairy_tales = $('.fairy_tales');
	fairy_tales.on('mouseenter', function() {
		$('.main_hero').css('display', 'none');
		$('.fairy_tales_hero').css('display', 'flex');
	});
	fairy_tales.on('mouseleave', function() {
		$('.fairy_tales_hero').css('display', 'none');
		$('.main_hero').css('display', 'flex');
	});*/
}



//navbar javascript


	var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
		showSlides(slideIndex += n)
	}

	function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("video-div");
		if (n > slides.length) {
			slideIndex = 1;
		}

		if (n < 1) {
			slideIndex = slides.length;
		}

		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}

	    slides[slideIndex - 1].style.display = "block";
}


// sidebar javascript


const navToggle = document.querySelector('.hamburg');
const navLinks = document.querySelectorAll('.nav-links'); 

navToggle.addEventListener('click', () => {

	document.body.classList.toggle('nav-open');
}); 

navLinks.forEach(link => {

	link.addEventListener('click', () => {

		document.body.classList.remove('nav-open');
	})
})


/** Animating numbers*/

var section = document.querySelector('.cases');
var hasEntered = false;

window.addEventListener('scroll', (e) => {
	var shouldAnimate = (window.scrollY + window.innerHeight) >= section.offsetTop;

	if (shouldAnimate && !hasEntered) {
		hasEntered = true;
		$('.count').each(function () {

			$(this).prop('Counter', 0).animate({

				Counter: $(this).text()

			},

				{
					duration: 2000,
					easing: 'swing',
					step: function (now) {
						$(this).text(commaSeparateNumber(Math.ceil(now)));
					}

				});
		});

	}
});




function commaSeparateNumber(val) {
	while (/(\d+)(\d{3})/.test(val.toString())) {
		val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	}
	return val;
}


	






 

  



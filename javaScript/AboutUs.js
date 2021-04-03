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

document.querySelector('.menu').addEventListener('click', () => {
	document.querySelector('.navbar-links ul').classList.toggle('active');

	document.querySelector('.menu').classList.toggle('exit');
});

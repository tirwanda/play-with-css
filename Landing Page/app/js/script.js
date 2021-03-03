const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const hasFade = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () => {
	if (header.classList.contains('open')) {
		body.classList.remove('noscroll');
		header.classList.remove('open');
		hasFade.forEach((elem) => {
			elem.classList.remove('fade-in');
			elem.classList.add('fade-out');
		});
	} else {
		header.classList.add('open');
		body.classList.add('noscroll');
		hasFade.forEach((elem) => {
			elem.classList.remove('fade-out');
			elem.classList.add('fade-in');
		});
	}
});

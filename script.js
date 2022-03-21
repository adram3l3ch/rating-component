const ratings = document.querySelectorAll('.card__rating');
const button = document.querySelector('.card__cta');
const section1 = document.querySelector('.one');
const section2 = document.querySelector('.two');
let rating;

ratings.forEach((ele, i) =>
	ele.addEventListener('click', e => {
		document.querySelector('.card__rating.active')?.classList.remove('active');
		e.target.classList.add('active');
		rating = i + 1;
	})
);

button.addEventListener('click', e => {
	if (rating) {
		document.querySelector('.grow').classList.add('fading');
		setTimeout(() => {
			section2.style.display = 'flex';
			section1.style.opacity = '0';
			document.querySelector('#rating').textContent = rating;
		}, 500);
		document
			.querySelector('.grow')
			.addEventListener('animationend', e => e.target.classList.remove('fading'));
	}
});

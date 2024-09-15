js: 'use strict';

const memes = [
	{
		id: 1,
		name: 'Michael Scream',
		img: 'images/Michael-screaming.jpg',
		description: 'No, God, please! NOOOOOOOOOOOO!!!!!!',
	},
	{
		id: 2,
		name: 'Michael Planning',
		img: 'images/michael-planning.jpg',
		description: 'I am ready to get hurt again',
	},
	{
		id: 3,
		name: 'Michael Crying',
		img: 'images/Michael-starts-crying.jpg',
		description: 'I was definitely not ready',
	},
	{
		id: 4,
		name: 'Prison Mike',
		img: 'images/Prisonmike.jpeg',
		description: 'The worst thing about prison was the dementors',
	},
	{
		id: 5,
		name: 'Michael Rocks',
		img: 'images/Michael-rocks.jpg',
		description: `Didn’t get much sleep,
       but I did get a few hours of anxiety in`,
	},
];

const slider = document.querySelector('.card-list');
let currentSlide = 0;

function updateDots() {
	const dotsContainer = document.querySelector('.slider-dots');
	dotsContainer.innerHTML = '';

	memes.forEach((_, index) => {
		const dotWrapper = document.createElement('div');
		dotWrapper.style.position = 'relative';
		const overlay = document.createElement('span');
		overlay.classList.add('overlay');
		const dot = document.createElement('span');
		dot.classList.add('dot');

		dotWrapper.appendChild(overlay);
		dotWrapper.appendChild(dot);

		if (index === currentSlide) {
			dot.classList.add('active');
		}

		dot.addEventListener('click', () => {
			currentSlide = index;
			renderMemes();
		});

		overlay.addEventListener('click', () => {
			currentSlide = index;
			renderMemes();
		});

		dotsContainer.appendChild(dotWrapper);
	});
}

function renderMemes() {
	slider.innerHTML = '';

	const meme = memes[currentSlide];
	const memeElement = document.createElement('li');
	memeElement.classList.add('card-item');

	const memeImage = document.createElement('img');
	memeImage.classList.add('card-image');
	memeImage.src = meme.img;
	memeImage.alt = `Meme ${meme.name}`;

	const textDots = document.createElement('div');
	textDots.classList.add('text-dots');

	textDots.innerHTML = `
    <p class="meme-text">${meme.description}</p>
    <div class="slider-dots"></div>
  `;

	const text = textDots.querySelector('.meme-text');

	memeImage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
	memeImage.style.opacity = '0';
	memeImage.style.transform = `translateX(${currentSlide * 20}px)`;

	text.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
	text.style.opacity = '0';
	text.style.transform = `translateX(${currentSlide * 20}px)`;

	memeElement.appendChild(memeImage);
	memeElement.appendChild(textDots);
	slider.appendChild(memeElement);

	setTimeout(() => {
		memeImage.style.opacity = '1';
		memeImage.style.transform = 'translateX(0)';
		text.style.opacity = '1';
		text.style.transform = 'translateX(0)';
	}, 10);

	updateDots();
}

function nextSlide() {
	currentSlide++;
	if (currentSlide >= memes.length) {
		currentSlide = 0;
	}
	renderMemes();
}

function prevSlide() {
	currentSlide--;
	if (currentSlide < 0) {
		currentSlide = memes.length - 1;
	}
	renderMemes();
}

renderMemes();

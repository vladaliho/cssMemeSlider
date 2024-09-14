'use strict';

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
		img: 'images/michael-rocks.jpg',
		description:
			'Didn’t get much sleep, but I did get a few hours of anxiety in',
	},
];

const slider = document.querySelector('.card-list');
let currentSlide = 0;

function updateDots() {
	const dotsContainer = document.querySelector('.slider-dots');
	dotsContainer.innerHTML = '';

	memes.forEach((_, index) => {
		const dot = document.createElement('span');
		dot.classList.add('dot');
		if (index === currentSlide) {
			dot.classList.add('active');
		}
		dot.addEventListener('click', () => {
			currentSlide = index;
			renderMemes();
		});
		dotsContainer.appendChild(dot);
	});
}

function renderMemes() {
	slider.innerHTML = '';

	const meme = memes[currentSlide];
	const memeElement = document.createElement('li');
	memeElement.classList.add('card-item');
	memeElement.innerHTML = `
    <img src="${meme.img}" class="card-image" alt="Meme ${meme.name}" />
    <div class="text-dots">
      <p class="meme-text">${meme.description}</p>
      <div class="slider-dots"></div> <!-- Empty container for dots -->
    </div>
  `;

	slider.appendChild(memeElement);
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

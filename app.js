function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const player = document.querySelector('#player');
const coin = document.querySelector('#coin');
let score = document.querySelector('#score');
let counter = 0;


window.addEventListener('keyup', function (e) {
	if (e.key === 'ArrowDown' || e.key === 'Down') {
		moveVertical(player, 60)
	} else if (e.key === 'ArrowUp' || e.key === 'Up') {
		moveVertical(player, -60)
	}
	else if (e.key === 'ArrowRight' || e.key === 'Right') {
		moveHorizontal(player, 60)
	}
	else if (e.key === 'ArrowLeft' || e.key === 'Left') {
		moveHorizontal(player, -60)
	}
	if (isTouching(player, coin)) {
		moveCoin();
		count();
	}
});

const getPosition = (pos) => {
	if (!pos) return 100;
	return parseInt(pos)
};

const moveCoin = () => {
	const height = Math.floor(Math.random() * window.innerHeight);
	const width = Math.floor(Math.random() * window.innerWidth);
	coin.style.top = `${height}px`
	coin.style.left = `${width}px`
}
const moveVertical = (element, amount) => {
	const currTop = getPosition(element.style.top);
	element.style.top = `${currTop + amount}px`;
}
const moveHorizontal = (element, amount) => {
	const currLeft = getPosition(element.style.left);
	element.style.left = `${currLeft + amount}px`;
	if (amount < 0) return element.style.transform = 'scale(-1,1)';
	return element.style.transform = 'scale(1,1)'
}

const count = () => {
	score.innerText = `Score: ${++counter}`;
}

moveCoin();
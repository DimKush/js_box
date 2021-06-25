'use strict'

const pinger = (num, period) =>{
	let i = num;
	console.log('ping');
	const interval = setInterval(() => {
		if(i > 0)
			console.log('ping');
		else{
			clearInterval(interval);
		}
	}, period);
}

const buttonElement = document.querySelector('#button');

buttonElement.addEventListener('click', () =>{
	pinger(5,1000);
}); 



const addImage = (imgPath,callback) => {
	const imgElement = document.createElement('img');
	imgElement.setAttribute('alt', 'MyPhoto');
	imgElement.src = imgPath;
	const containerElem = document.querySelector('.page');

	containerElem.append(imgElement);

	const imgLoaded = () => {
		const {width,height} = imgElement;
		callback({width,height});
	}

	imgElement.addEventListener('load', imgLoaded);
};

const imgPathOrig = `https://free4kwallpapers.com/uploads/originals/2020/03/30/cyberpunk-wallpaper.jpg`;

const onImageLoaded = ({width,height})=> {
	console.log(width);
	console.log(height);
	const sizeElement = document.querySelector('.image-size');
	sizeElement.textContent = `${width} x ${height}`;
};

addImage(imgPathOrig,onImageLoaded);

// ALL ASYNC code runs AFTER sync
const main = () => {
	console.log('1');
	setTimeout(() => console.log('2'), 1001);
	console.log('3');
	setTimeout(() => console.log('4'), 1000);
	console.log('5');
}

main();
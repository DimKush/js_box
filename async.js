//	'use strict'

const buttonElement = document.querySelector('#button');

buttonElement.addEventListener('click', () =>{
	
	let sum = 0;
	console.log("click");
	const startTime = new Date();
	for(let i = 0 ; i < 5e9; i++){
		sum += i;
	}
	const endTime = new Date();
	console.log(`Process time is ${startTime - endTime}ms`);
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
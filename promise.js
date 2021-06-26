'use strict'

const addImageWithPromise = imgPath => {
	const prm = new Promise((resolve, reject) => {
		const imgElement = document.createElement('img');
		imgElement.setAttribute('alt', 'MyPhoto');
		imgElement.src = imgPath;
		const containerElem = document.querySelector('.page');

		containerElem.append(imgElement);

		const imgLoaded = () => {
			const {width,height} = imgElement;
			resolve({width,height});
		}

		imgElement.addEventListener('load', imgLoaded);

		imgElement.addEventListener('error', () => reject( new Error('Image load failed.')));
	}); 

	return prm;
}

const imgPathOrig = `https://free4kwallpapers.com/uploads/originals/2020/03/30/cyberpunk-wallpaper.jpg`;

const resultPromise = addImageWithPromise(imgPathOrig);

resultPromise.then(({width,height}) => 
	 console.log({width, height})
);

resultPromise.catch(error => console.log(error));
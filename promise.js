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


const requestUserDate = userId => {
	if(userId === 'broken'){
		const request = new Promise((resolve,reject) => {
			setTimeout(() => {
				reject(new Error(`Cannot read userId : ${userId}. userId is incorrect.`));
			}, 500);});
			return request;
	} 
	else {
		const request = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({
					name: "John",
					age: 17,
					email: `${userId}@gmail.com`,
					userId,
				});
			}, 1000);
		});
		return request;
	}
};

requestUserDate('user-1')
	.then(data => console.log(data));

requestUserDate('broken')
	.catch(error => console.log(error));


'use strict'
const today = new Date();
console.log(today);

const getDayOfWeek = (date, days) => {
	const day = new Date(date).getDate();
	const dateInFuture = new Date(date).setDate(day + days);

	return dateInFuture;
};

const res = getDayOfWeek(new Date(), 25);

console.log(new Date(res));
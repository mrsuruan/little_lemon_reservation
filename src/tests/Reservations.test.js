import { render, screen } from '@testing-library/react';
import  Reservations, { initializeTimes, updateTimes } from '../components/Reservations';

window.seededRandom = function (seed) {
	var m = 2**35 - 31;
	var a = 185852;
	var s = seed % m;
	return function () {
			return (s = s * a % m) / m;
	};
}

window.fetchAPI = function(date) {
	console.log(date);
	console.log("date type: ", typeof date)

	let result = [];
	let random = seededRandom(date.getDate());

	for(let i = 17; i <= 23; i++) {
			if(random() < 0.5) {
					result.push(i + ':00');
			}
			if(random() < 0.5) {
					result.push(i + ':30');
			}
	}
	return result;
};

describe('Reservations tests', () => {
	test('tests initializeTimes function', async () => {
		const expectedTimes = [
			'17:00',
			'17:30',
			'18:00',
			'19:30',
			'20:30',
			'21:00',
			'21:30'
		];

		const ourTime = new Date('2023-07-05');
		const result = await initializeTimes(ourTime);
		expect(result).toEqual(expectedTimes);
	});

	test('tests updateTimes function', async () => {
		const selectedDate = new Date('2023-07-05');
		const initialState = await initializeTimes(selectedDate);
		const updatedTimes = await updateTimes(selectedDate);
		expect(updatedTimes).toEqual(initialState);
	});
});

import { render, screen } from '@testing-library/react';
import  Reservations, { initializeTimes, updateTimes } from '../components/Reservations';

describe('Reservations tests', () => {
    test('tests initializeTimes function', () => {

        // const initializeTimes = jest.fn();

        const expectedTimes = [
            '5:00 PM',
            '5:30 PM',
            '6:00 PM',
            '6:30 PM',
            '7:00 PM',
            '7:30 PM',
            '8:00 PM',
            '8:30 PM',
            '9:00 PM',
            '9:30 PM',
            '10:00 PM'
        ];

        const result = initializeTimes();
        expect(result).toEqual(expectedTimes);
    });

    test('tests updateTimes function', () => {
        const selectedDate = new Date();
        const initialState = initializeTimes();
        const updatedTimes = updateTimes(selectedDate);
        expect(updatedTimes).toEqual(initialState);
    });
});

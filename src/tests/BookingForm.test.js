import { render, screen } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

describe('BookingForm tests', () => {
  test('Renders the BookingForm label text', () => {
    render(<BookingForm />);
    const inputElement = screen.getByLabelText("Number of guests");
    expect(inputElement).toBeInTheDocument();
  });
});



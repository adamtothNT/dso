import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders message form and submits input', () => {
  render(<App />);
  
  // Check if the form elements are present
  const inputElement = screen.getByPlaceholderText(/Enter a message/i);
  const buttonElement = screen.getByText(/Send/i);
  
  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();

  // Simulate entering a message and submitting the form
  fireEvent.change(inputElement, { target: { value: 'Hello World' } });
  fireEvent.click(buttonElement);
  
  // Since we haven't mocked the API call, no response will be shown yet
});


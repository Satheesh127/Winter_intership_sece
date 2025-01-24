import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the GetInTouch section', () => {
  render(<App />);
  const getInTouchElement = screen.getByText(/get in touch/i);
  expect(getInTouchElement).toBeInTheDocument();
});

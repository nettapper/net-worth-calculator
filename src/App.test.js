import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Net Worth Calculator', () => {
  render(<App />);
  const linkElement = screen.getByText(/net worth calculator/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
   const teamLink = screen.getByText(/Team/i);
  expect(teamLink).toBeInTheDocument();
});

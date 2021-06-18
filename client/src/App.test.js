import { render, screen } from '@testing-library/react';
import About from './pages/about/About.jsx';

test('renders about title', () => {
  render(<About />);
  expect(screen.getAllByText('About Countries App')).toHaveLength(1)
})

test('renders footer text', () => {
  render(<Footer />);
  expect(screen.getAllByText('AGUSTIN GALLEGO')).toHaveLength(1)
})
import { render, screen } from '@testing-library/react';
import Greeting from '../../components/Greeting';

test('renders greeting with name', () => {
  render(<Greeting name="David" />);
  expect(screen.getByTestId('greeting')).toHaveTextContent('Hello, David!');
});

test('renders fallback when no name', () => {
  render(<Greeting />);
  expect(screen.getByTestId('greeting')).toHaveTextContent('Hello, guest!');
});

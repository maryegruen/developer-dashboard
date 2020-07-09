import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../components/Dashboard';

test('renders stytch logo', () => {
  const { getByAltText } = render(<Dashboard />);
  const linkElement = getByAltText(/logo/i);
  expect(linkElement).toBeInTheDocument();
});

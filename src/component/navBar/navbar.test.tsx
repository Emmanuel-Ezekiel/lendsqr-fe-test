import React from 'react';
import { render } from '@testing-library/react';
import Index from './index';

test('renders navbar', () => {
  const { getByText } = render(<Index />);
  const navbarElement = getByText(/navbar/i);
  expect(navbarElement).toBeInTheDocument();
});

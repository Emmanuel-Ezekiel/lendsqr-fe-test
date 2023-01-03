import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

describe('App', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });

  it('displays the correct routes', () => {
  const { getByText, getByTestId } = render(<App />);

  fireEvent.click(getByText('Login'));
  expect(getByTestId('login-page')).toBeTruthy();

  fireEvent.click(getByText('Dashboard'));
  expect(getByTestId('dashboard-page')).toBeTruthy();

  fireEvent.click(getByText('Users'));
  expect(getByTestId('user-page')).toBeTruthy();
});
});




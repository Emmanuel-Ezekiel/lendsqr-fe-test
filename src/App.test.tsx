import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('should render the login page by default', async () => {
  const { getByText } = render(<App />);
  await waitFor(() => {
    expect(getByText('Welcome!')).toBeInTheDocument();
  });
});

test('should redirect to the dashboard page after logging in', async () => {
  const { getByText, getByTestId } = render(<App />);

  fireEvent.change(getByTestId('email'), {
    target: { value: 'test@example.com' }
  });
  fireEvent.change(getByTestId('password'), {
    target: { value: 'password' }
  });
  fireEvent.click(getByText('LOG IN'));

  await waitFor(() => {
    expect(getByTestId('Dashboard')).toBeInTheDocument();
  });
});


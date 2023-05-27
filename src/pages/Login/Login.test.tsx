import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './login';
import ApiProvider from '../../utils/api/apiProvider';

describe('Login', () => {
  const mockLogin = jest.fn();

  beforeEach(() => {
    jest.spyOn(ApiProvider.prototype, 'login').mockImplementation(mockLogin);
    render(<Login />);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders the login form', () => {
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('LOG IN')).toBeInTheDocument();
  });

  it('calls login function when the form is submitted', () => {
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByText('LOG IN');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    expect(mockLogin).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    });
  });

});



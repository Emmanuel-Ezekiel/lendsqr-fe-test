import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Index from "./index";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("<Index />", () => {
  it("should render the form and input fields", () => {
    const { getByPlaceholderText, getByText } = render(<Index />);
    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");
    const submitBtn = getByText("LOG IN");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  it("should navigate to dashboard on successful login", () => {
    const navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);
    const { getByPlaceholderText, getByText } = render(<Index />);
    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");
    const submitBtn = getByText("LOG IN");
    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(submitBtn);

    expect(navigate).toHaveBeenCalledWith("/dashboard");
  });
});

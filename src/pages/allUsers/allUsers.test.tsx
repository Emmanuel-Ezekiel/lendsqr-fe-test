import React from "react";
import { render, fireEvent } from "@testing-library/react";
import User from "./allUsers";

describe("User component", () => {
  it("renders without errors", () => {
    render(<User />);
  });

  it("opens user details when back button is clicked", () => {
    const { getByText } = render(<User />);
    fireEvent.click(getByText("Back to Users"));
    expect(getByText("User Details")).toBeInTheDocument();
  });

  it("activates user when activate button is clicked", () => {
    const { getByText } = render(<User />);
    fireEvent.click(getByText("Activate User"));
    // Add assertion to check if user is activated
  });

  it("blacklists user when blacklist button is clicked", () => {
    const { getByText } = render(<User />);
    fireEvent.click(getByText("Blacklist User"));
    // Add assertion to check if user is blacklisted
  });

  // Add more tests for other functionality and interactions
});

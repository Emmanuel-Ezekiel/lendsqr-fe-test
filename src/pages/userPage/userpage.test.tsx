import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Index from "./Index";

describe("Index page", () => {
  it("renders the page correctly", () => {
    const { getByText } = render(<Index />);
    expect(getByText("Users")).toBeInTheDocument();
    expect(getByText("User Details")).toBeInTheDocument();
  });

  it("toggles between user list and user details", () => {
    const { getByText } = render(<Index />);
    fireEvent.click(getByText("User Details"));
    expect(getByText("Back to Users")).toBeInTheDocument();
    fireEvent.click(getByText("Back to Users"));
    expect(getByText("User Details")).toBeInTheDocument();
  });
});
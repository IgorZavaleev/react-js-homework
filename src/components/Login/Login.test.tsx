import React from "react";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Login } from "./Login";

const mockLogin = jest.fn().mockResolvedValueOnce(1);
const mockNavigate = jest.fn();

jest.mock("@/components/Login/ProvideAuth", () => ({
  useAuth: () => ({
    login: mockLogin,
  }),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("Login component check", () => {
  it("Login form submit without filled login name calls nothing", () => {
    render(<Login />);
    fireEvent.submit(screen.getByTestId("login-form"));
    expect(mockLogin).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });
  it("Login form submit with filled login name calls login and navigate", () => {
    render(<Login />);
    fireEvent.change(screen.getByTestId("login-input"), {
      target: { value: "IvanBodhidharma" },
    });
    fireEvent.submit(screen.getByTestId("login-form"));
    expect(mockLogin).toHaveBeenCalledWith("IvanBodhidharma");
    expect(mockNavigate).toHaveBeenCalledWith("/", { replace: true });
  });
});

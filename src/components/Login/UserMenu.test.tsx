import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { UserMenu } from "@/components/Login/UserMenu";

const mockNavigate = jest.fn();
const mockLogout = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

jest.mock("@/components/Login/ProvideAuth", () => ({
  useAuth: () => ({
    logout: mockLogout,
    user: "IvanBodhidharma",
  }),
}));

describe("UserMenu tests", () => {
  it("UserMenu renders correctly", async () => {
    render(<UserMenu />);
    expect(
      screen.queryByText("You are logged as IvanBodhidharma!")
    ).toBeInTheDocument();
  });

  it("Logout button works correctly", async () => {
    render(<UserMenu />);
    fireEvent.click(screen.queryByTestId("logout-button"));
    expect(mockLogout).toBeCalled();
    expect(mockNavigate).toBeCalled();
  });
});

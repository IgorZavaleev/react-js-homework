import { PrivateRoute } from "@/components/Login/PrivateRoute";
import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockNavigate = jest.fn();
const mockIsLoggedIn = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

jest.mock("@/components/Login/ProvideAuth", () => ({
  useAuth: () => ({
    isLoggedIn: mockIsLoggedIn,
  }),
}));

describe("PrivateRoute tests", () => {
  it("PrivateRoute: user not logged in", async () => {
    mockIsLoggedIn.mockResolvedValueOnce(false);
    await act(async () => {
      render(
        <PrivateRoute>
          <span data-testid="private-route-span" />
        </PrivateRoute>
      );
    });

    expect(screen.queryByTestId("private-route-span")).not.toBeInTheDocument();
    expect(mockNavigate).toBeCalledWith("/login");
  });

  it("PrivateRoute: user logged in", async () => {
    mockIsLoggedIn.mockResolvedValueOnce(true);
    await act(async () => {
      render(
        <PrivateRoute>
          <span data-testid="private-route-span" />
        </PrivateRoute>
      );
    });

    expect(screen.queryByTestId("private-route-span")).toBeInTheDocument();
  });
});

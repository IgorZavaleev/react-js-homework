import { renderHook, act } from "@testing-library/react-hooks/dom";
import { ProvideAuth, useAuth } from "@/components/Login/ProvideAuth";

describe("useAuth tests", () => {
  it("isLoggedIn must be false before login, true after login, and false after logout", async () => {
    const { result } = renderHook(() => useAuth(), { wrapper: ProvideAuth });
    let isLogggedIn;

    await act(async () => (isLogggedIn = await result.current.isLoggedIn()));
    expect(isLogggedIn).toEqual(false);
    expect(result.current.user).toBeNull();

    await act(async () => await result.current.login("IvanBodhidharma"));
    await act(async () => (isLogggedIn = await result.current.isLoggedIn()));
    expect(isLogggedIn).toEqual(true);
    expect(result.current.user).toEqual("IvanBodhidharma");

    await act(async () => await result.current.logout());
    await act(async () => (isLogggedIn = await result.current.isLoggedIn()));
    expect(isLogggedIn).toEqual(false);
    expect(result.current.user).toBeNull();
  });
});

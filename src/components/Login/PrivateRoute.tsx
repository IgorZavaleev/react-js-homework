// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "@/components/Login/ProvideAuth";

export type AuthState = "authorized" | "not_authorized" | "discovering";

export const PrivateRoute = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>("discovering");
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    (async () => {
      const isAuthorized = await isLoggedIn();
      setAuthState(isAuthorized ? "authorized" : "not_authorized");
    })();
  }, []);

  useEffect(() => {
    if (authState === "not_authorized") {
      navigate("/login");
    }
  });

  return (
    <>
      {authState === "discovering" && <span>проверка авторизации...</span>}
      {authState === "authorized" && children}
    </>
  );
};

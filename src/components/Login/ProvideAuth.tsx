import { createContext, useContext, useState } from "react";

const authContext = createContext();

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

const sleep = (x: number) => new Promise((r) => setTimeout(r, x));

const useProvideAuth = () => {
  const [user, setUser] = useState<string | null>(null);

  const login = async (name: string) => {
    await sleep(100);
    await localStorage.setItem("login", name);
    setUser(name);
  };

  const isLoggedIn = async () => {
    await sleep(100);
    const login = await localStorage.getItem("login");
    const result = Boolean(login);
    setUser(result ? login : null);
    return result;
  };

  const logout = async () => {
    await sleep(100);
    await localStorage.removeItem("login");
    setUser(null);
  };

  return {
    user,
    login,
    isLoggedIn,
    logout,
  };
};

export const useAuth = () => {
  return useContext(authContext);
};

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/components/Login/ProvideAuth";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  return (
    <div>
      <form
        data-testid="login-form"
        onSubmit={(() => async (event) => {
          if (userName) {
            event.preventDefault();
            navigate("/", { replace: true });
            await login(userName);
          }
        })()}
      >
        <input
          type="text"
          value={userName}
          onChange={(ev) => {
            setUserName(ev.target.value);
          }}
          data-testid="login-input"
        />
        <button type="submit" data-testid="login-submit">
          Войти
        </button>
      </form>
    </div>
  );
};

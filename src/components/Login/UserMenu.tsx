import { useNavigate } from "react-router-dom";
import { useAuth } from "@/components/Login/ProvideAuth";

export const UserMenu = () => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  return (
    <div css={{ display: "flex", justifyContent: "space-between" }}>
      You are logged as {user}!
      <button
        onClick={(() => async () => {
          navigate("/login", { replace: true });
          await logout();
        })()}
        data-testid="logout-button"
      >
        Выйти
      </button>
    </div>
  );
};

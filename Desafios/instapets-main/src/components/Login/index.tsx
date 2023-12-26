import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./styles.css";

interface LoginProps {
  loginType: "login" | "signup";
}

function Login({ loginType }: LoginProps) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim() !== "" && password.trim() !== "") {
      navigate("/newpost");
    }
  };

  return (
    <div className="login-container">
      <h1>{loginType === "login" ? "Login" : "Criar conta"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          placeholder="Login"
          value={username}
          onChange={handleChangeUsername}
        />
        <input
          type="password"
          id="password"
          placeholder="Senha"
          value={password}
          onChange={handleChangePassword}
        />
        <button id="submit-button" type="submit">{loginType === "login" ? "Entrar" : "Criar conta"}</button>
        <NavLink to={loginType === "login" ? "/signup" : "/login"}>
          {loginType === "login" ? "Criar conta" : "Já tenho conta"}
        </NavLink>
      </form>
    </div>
  );
}

export default Login;
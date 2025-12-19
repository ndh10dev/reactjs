import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      alert("Please enter all the required information.");
      return;
    }

    try {
      const res = await fetch(
        "https://v-social.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        alert(data?.message || "Incorrect email or password");
        return;
      }

      const accessToken = data?.data?.tokens?.accessToken;

      if (!accessToken) {
        alert("Login failed: token not found");
        return;
      }
      localStorage.setItem("accessToken", accessToken);

      alert("Login successful");
      navigate("/");
    } catch (error) {
      alert("Unable to connect to server");
    }
  };

  return (
    <div className="loginform">
      <div className="page">
        <h1>Login</h1>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleLogin}>Login</button>

        <div className="links">
          <NavLink to="/profile/info">Forgot password</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      </div>
    </div>
  );
}
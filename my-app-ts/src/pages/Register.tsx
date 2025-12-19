import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
  if (
    !email.trim() ||
    !password.trim() ||
    !firstName.trim() ||
    !lastName.trim() ||
    !username.trim()
  ) {
    alert("Please enter all the required information.");
    return;
  }

  try {
    const res = await fetch(
      "https://v-social.onrender.com/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          username,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Register failed");
      return;
    }
    localStorage.setItem(
      "accessToken",
      data.data.tokens.accessToken
    );
    localStorage.setItem(
      "refreshToken",
      data.data.tokens.refreshToken
    );
    alert("Register successful");
    navigate("/");
  } catch (err) {
    alert("Unable to connect to server");
  }
};
  return (
    <div className="loginform">
      <div className="page">
        <h1>Register</h1>

        <div>
          <label>Email<span className="hightlight">*</span> :</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>First Name :</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div>
          <label>Last Name :</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div>
          <label>Username<span className="hightlight">*</span> :</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label>Password<span className="hightlight">*</span> :</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}
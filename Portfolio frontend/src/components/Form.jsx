import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Form.css";
import LoadingIndicator from "./LoadingIndicator.jsx";

function Form({ route, method }) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (method === "register" && password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const payload = {
        username,
        password,
        ...(method === "register" && {
          fname: fname,
          lname: lname,
          email,
        }),
      };

      const res = await api.post(route, payload);

      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (err) {
      setError(
        err.response?.data?.detail ||
          err.response?.data?.error ||
          "An error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  const registerClick = () => {
    navigate("/register");
  };

  const loginClick = () => {
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1 style={{ color: "white" }}>{name}</h1>
      {error && (
        <p className="error-message" style={{ color: "red" }}>
          {error}
        </p>
      )}

      {method === "register" && (
        <>
          <input
            className="form-input"
            type="text"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="First Name"
          />
          <input
            className="form-input"
            type="text"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            placeholder="Last Name"
          />
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </>
      )}

      <input
        className="form-input"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        className="form-input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      {method === "register" && (
        <input
          className="form-input"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
      )}
      {loading && <LoadingIndicator />}
      <button className="form-button" type="submit">
        {name}
      </button>
      {method === "login" && (
        <button type="button" className="form-button" onClick={registerClick}>
          Register
        </button>
      )}
      {method === "register" && (
        <button type="button" className="form-button" onClick={loginClick}>
          Login
        </button>
      )}
    </form>
  );
}

export default Form;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/user/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.authReducer);

  const logs = useSelector((state) => state.logReducer);

  console.log({ logs });

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  if (logs.length) {
    console.info({logs});
  }

  return (
    <div
      style={{
        maxWidth: "300px",
        margin: "0 auto",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem",
            borderRadius: "4px",
            border: "none",
            background: "#007BFF",
            color: "#fff",
            cursor: "pointer",
          }}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Loading..." : "Submit"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;

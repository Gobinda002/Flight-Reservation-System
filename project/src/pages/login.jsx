import React, { useState } from "react";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(""); // only for signup
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const resetFields = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setError("");
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    resetFields();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password || (!isLogin && !email)) {
      setError("Please fill in all required fields.");
      return;
    }

    if (isLogin) {
      // Fake login check
      if (username === "admin" && password === "1234") {
        alert("Login successful!");
        setError("");
      } else {
        setError("Invalid username or password.");
      }
    } else {
      // Fake signup logic
      alert(`Signup successful! Welcome, ${username}.`);
      setError("");
      setIsLogin(true);
      resetFields();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {error && (
          <div className="mb-4 text-red-600 font-medium text-sm">{error}</div>
        )}

        <label className="block mb-2 text-sm font-medium" htmlFor="username">
          Username
        </label>
        <input
          id="username"
          type="text"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
        />

        {!isLogin && (
          <>
            <label className="block mb-2 text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </>
        )}

        <label className="block mb-2 text-sm font-medium" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete={isLogin ? "current-password" : "new-password"}
        />

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition"
        >
          {isLogin ? "Log In" : "Sign Up"}
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={toggleForm}
            className="text-teal-600 hover:underline font-medium"
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </p>
      </form>
    </div>
  );
}

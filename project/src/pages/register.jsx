import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Registration failed");
      } else {
        alert("Registration successful! You can now log in.");
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        {error && (
          <div className="mb-4 text-red-600 font-medium text-sm">{error}</div>
        )}

        <label htmlFor="name" className="block mb-2 text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          disabled={loading}
        />

        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          disabled={loading}
        />

        <label htmlFor="password" className="block mb-2 text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          disabled={loading}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition disabled:opacity-50"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-teal-600 hover:underline font-medium">
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
}

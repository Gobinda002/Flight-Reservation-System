
import db from "../db.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please provide name, email and password." });
  }

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: "Database error." });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: "Email already registered." });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      db.query(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, hashedPassword],
            (err) => {
        if (err) {
            console.error("Insert error:", err.sqlMessage || err);
        return res.status(500).json({ message: "Failed to register user.", error: err.sqlMessage || err });
    }
    res.status(201).json({ message: "User registered successfully." });
  }
      );
    } catch (error) {
      console.error("Hashing error:", error);
      res.status(500).json({ message: "Server error." });
    }
  });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please provide email and password." });
  }

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).json({ message: "Database error." });
    }

    if (results.length === 0) {
      return res.status(400).json({ message: "User not found." });
    }

    const user = results[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password." });
    }

    // Login success: send back user info (avoid sending password!)
    res.json({ message: "Login successful.", userId: user.id, name: user.name });
  });
};

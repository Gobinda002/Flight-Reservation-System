const db = require("../db");
const bcrypt = require("bcryptjs");



exports.registerUser = async (req, res) => {
  // register code here (as provided earlier)
};

exports.loginUser = async (req, res) => {
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

    // If login successful, respond accordingly
    res.json({ message: "Login successful.", userId: user.id, name: user.name });
  });
};

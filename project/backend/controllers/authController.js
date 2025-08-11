const db = require("../config/db");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
        if (err) return res.json({ error: err });
        if (results.length > 0) return res.json({ message: "Email already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [name, email, hashedPassword], (err) => {
                if (err) return res.json({ error: err });
                res.json({ message: "User registered successfully" });
            });
    });
};

exports.loginUser = (req, res) => {
    const { email, password } = req.body;
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
        if (err) return res.json({ error: err });
        if (results.length === 0) return res.json({ message: "User not found" });

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.json({ message: "Invalid password" });

        res.json({ message: "Login successful", userId: user.id, name: user.name });
    });
};

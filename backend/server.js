const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0000',
  database: 'flight'
});

app.post('/register', (req, res) => {
  
  const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(sql, [username, email, password], (err, result) => {
    if (err) return res.json(err);
    return res.json({ id: result.insertId, username, email });
  });
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
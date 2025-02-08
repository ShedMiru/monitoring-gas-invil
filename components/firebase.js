const express = require('express');
const mysql = require('mysql2');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;
const THINGSPEAK_API_KEY = 'CQINUNFTPK8JX22T'; // Replace with your actual ThingSpeak API key
const THINGSPEAK_CHANNEL_ID = '2823674'; // Replace with your ThingSpeak channel ID
const THINGSPEAK_BASE_URL = `https://api.thingspeak.com/channels/${THINGSPEAK_CHANNEL_ID}/feeds.json`;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sbios',
    port: 3306 // Ensure the port is specified for MySQL
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

// Create table if not exists
const createTableQuery = `CREATE TABLE IF NOT EXISTS biogas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    gas FLOAT,
    tekanan FLOAT,
    suhu FLOAT,
    banyakgas FLOAT
)`;

db.query(createTableQuery, (err) => {
    if (err) throw err;
    console.log('Table biogas ensured');
});

// Fetch data from ThingSpeak and save to MySQL
app.get('/fetch', async (req, res) => {
    try {
        const response = await axios.get(`${THINGSPEAK_BASE_URL}?api_key=${THINGSPEAK_API_KEY}&results=1`);
        const feeds = response.data.feeds;

        if (feeds && feeds.length > 0) {
            const feed = feeds[0];
            const insertQuery = `INSERT INTO biogas (gas, tekanan, suhu, banyakgas) VALUES (?, ?, ?, ?)`;

            db.query(insertQuery, [
                parseFloat(feed.field1) || 0, // gas
                parseFloat(feed.field2) || 0, // tekanan
                parseFloat(feed.field3) || 0, // suhu
                parseFloat(feed.field4) || 0  // banyakgas
            ], (err, result) => {
                if (err) throw err;
                res.status(200).json({ message: 'Data fetched and saved successfully' });
            });
        } else {
            res.status(404).json({ message: 'No data available from ThingSpeak' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Read all data
app.get('/data', (req, res) => {
    db.query('SELECT * FROM biogas', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// Update data by ID
app.put('/data/:id', (req, res) => {
    const { gas, tekanan, suhu, banyakgas } = req.body;
    const updateQuery = `UPDATE biogas SET gas = ?, tekanan = ?, suhu = ?, banyakgas = ? WHERE id = ?`;

    db.query(updateQuery, [gas, tekanan, suhu, banyakgas, req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Data updated successfully' });
    });
});

// Delete data by ID
app.delete('/data/:id', (req, res) => {
    const deleteQuery = `DELETE FROM biogas WHERE id = ?`;

    db.query(deleteQuery, [req.params.id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Data deleted successfully' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

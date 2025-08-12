// backend/controllers/flightController.js
const { pool } = require('../db');

exports.getAllFlights = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM flights');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching all flights:', error.message);
        res.status(500).json({ message: 'Error fetching flights', error: error.message });
    }
};

exports.getFlightById = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM flights WHERE id = ?', [req.params.id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ message: 'Flight not found' });
        }
    } catch (error) {
        console.error(`Error fetching flight with ID ${req.params.id}:`, error.message);
        res.status(500).json({ message: 'Error fetching flight', error: error.message });
    }
};

exports.searchFlights = async (req, res) => {
    const { from, to, depart, mode } = req.query;
    try {
        let query = 'SELECT * FROM flights WHERE departure_location = ? AND arrival_location = ?';
        const params = [from, to];

        if (depart) {
            query += ' AND DATE(departure_time) = ?';
            params.push(depart);
        }

        const [rows] = await pool.query(query, params);
        
        // This logic simulates the round-trip data your frontend expects
        if (mode === 'round-trip') {
            const flightsWithReturn = rows.map(flight => ({
                ...flight,
                returnDate: req.query.return,
                returnFrom: flight.arrival_location,
                returnTime: "16:20", // Hardcoded for this example
                returnArriveAt: flight.departure_location,
                returnArriveTime: "17:55", // Hardcoded for this example
            }));
            res.json(flightsWithReturn);
        } else {
            res.json(rows);
        }

    } catch (error) {
        console.error('Error searching flights:', error.message);
        res.status(500).json({ message: 'Error searching flights', error: error.message });
    }
};

exports.createFlight = async (req, res) => {
    try {
        const { flight_number, departure_location, arrival_location, departure_time, arrival_time, price } = req.body;
        const [result] = await pool.query(
            'INSERT INTO flights (flight_number, departure_location, arrival_location, departure_time, arrival_time, price) VALUES (?, ?, ?, ?, ?, ?)',
            [flight_number, departure_location, arrival_location, departure_time, arrival_time, price]
        );
        res.status(201).json({ id: result.insertId, ...req.body });
    } catch (error) {
        console.error('Error creating flight:', error.message);
        res.status(500).json({ message: 'Error creating flight', error: error.message });
    }
};

exports.updateFlight = async (req, res) => {
    try {
        const { flight_number, departure_location, arrival_location, departure_time, arrival_time, price } = req.body;
        const [result] = await pool.query(
            'UPDATE flights SET flight_number = ?, departure_location = ?, arrival_location = ?, departure_time = ?, arrival_time = ?, price = ? WHERE id = ?',
            [flight_number, departure_location, arrival_location, departure_time, arrival_time, price, req.params.id]
        );
        if (result.affectedRows > 0) {
            res.json({ id: req.params.id, ...req.body });
        } else {
            res.status(404).json({ message: 'Flight not found' });
        }
    } catch (error) {
        console.error(`Error updating flight with ID ${req.params.id}:`, error.message);
        res.status(500).json({ message: 'Error updating flight', error: error.message });
    }
};

exports.deleteFlight = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM flights WHERE id = ?', [req.params.id]);
        if (result.affectedRows > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Flight not found' });
        }
    } catch (error) {
        console.error(`Error deleting flight with ID ${req.params.id}:`, error.message);
        res.status(500).json({ message: 'Error deleting flight', error: error.message });
    }
};
const express = require('express');
const router = express.Router();
const pool = require('../model/db');

router.get('/', (req, res) => {
    res.send('Hello from gameController');
});

router.post('/newgame', async (req, res) => {
    const sql = "INSERT INTO games DEFAULT VALUES RETURNING id";
    
    try {
        const result = await pool.query(sql);
        res.send(JSON.stringify({id: result.rows[0].id}));
        console.log(`Created game with id: ${result.rows[0].id}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error creating new game');
    }
});

module.exports = router;
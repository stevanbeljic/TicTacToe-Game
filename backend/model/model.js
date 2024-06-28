const pool = require('./db');

const createTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS games (
        id SERIAL PRIMARY KEY
      )
    `);
    console.log('Table "games" has been created');
  } catch (err) {
    console.error('Error creating table "games"', err);
  }
};

module.exports = createTable;

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'tictactoe',
  password: 'password',
  port: 5432,
});

module.exports = pool;
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST, // e.g., your-rds-instance-name.amazonaws.com
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432, // Default PostgreSQL port
});


module.exports = {
  query: (text, params) => pool.query(text, params)
};

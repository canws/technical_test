const { Pool } = require('pg');
const colors = require('colors');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'password',
    port: 5432,
});

const connectDB = async () => {
    try {
        await pool.connect();
        console.log(colors.blue('PostgreSQL Connected').bold);
    } catch (error) {
        console.error(colors.red(error).bold);
        process.exit(1);
    }
};

module.exports = { connectDB, pool };

const dotenv = require('dotenv');
const {request} = require("express");
dotenv.config();

const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
})

const getMonsterById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM monsters WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows[0])
    })
}

module.exports = {
    getMonsterById
}
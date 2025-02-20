//knexfile.js
require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL,
  DEBUG,
} = process.env;

module.exports = {
  production: {
    client: "pg",
    pool: { min: 1, max: 5 },
    connection: {
      connectionString: DATABASE_URL,
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    migrations: {
      directory: path.join(__dirname, "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "db", "seeds"),
    },
    debug: !!DEBUG,
  },
}
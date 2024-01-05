require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL,
  DEBUG,
} = process.env;

module.exports = {
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
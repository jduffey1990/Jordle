//server.js
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const { PORT } = process.env;

const app = require("./app");
const knex = require("./db/connection");

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(PORT, listener);
  })
  .catch((error) => {
    console.error(error);
    knex.destroy();
  });

function listener() {
  console.log(`Listening on Port ${PORT}!`);
}
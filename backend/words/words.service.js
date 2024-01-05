const knex = require("../db/connection");

function read() {
    return knex("words")   // Assuming "words" is your table name
      .select("*")
      .orderByRaw('RANDOM()') // Order by RANDOM() function
      .limit(1); // Limit to one result
  }
  

module.exports = {
  read
};
const service = require("./words.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function register(req, res) {
  const { username, email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  // Add user to database
  const userId = await knex('users').insert({
    username,
    email,
    password_hash: passwordHash
  }).returning('id');

  res.status(201).json({ userId: userId[0] });
}

async function list(req, res, next) {
  try {
    const scores = await service.read();  // Use the service to fetch the scores
    res.json({ data: scores });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  register: asyncErrorBoundary(register),
  list: asyncErrorBoundary(list),  // renamed from read to list for clarity
};

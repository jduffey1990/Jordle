const service = require("./words.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");


async function list(req, res, next) {
  try {
    const scores = await service.read();  // Use the service to fetch the scores
    res.json({ data: scores });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  list: asyncErrorBoundary(list),  // renamed from read to list for clarity
};

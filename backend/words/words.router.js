const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
const controller = require("./words.controller");

router.route("/ping")
    .get((req, res) => res.json({ status: 'pinged' }))
    .all(methodNotAllowed);

router.route("/")
    .post(controller.register)
    .get(controller.list)
    .all(methodNotAllowed)

module.exports = router;
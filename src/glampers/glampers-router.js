const express = require("express");
const GlampersService = require("./glampers-service");

const glampersRouter = express.Router();

glampersRouter.route("/").get((req, res, next) => {
  const knexInstance = req.app.get("db");
  GlampersService.getAllGlampers(knexInstance)
    .then((glampers) => {
      res.json(glampers);
    })
    .catch(next);
});

module.exports = glampersRouter;

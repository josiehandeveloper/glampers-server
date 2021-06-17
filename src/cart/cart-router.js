const express = require("express");
const CartService = require("./cart-service");
const { requireAuth } = require("../middleware/jwt-auth");
const GlampersService = require("../glampers/glampers-service");

const cartRouter = express.Router();
const jsonParser = express.json();

cartRouter
  .route("/")
  .get((req, res, next) => {
    const knexInstance = req.app.get("db");
    CartService.getAllItemsByUser(knexInstance)
      .then((items) => {
        res.json(items);
      })
      .catch(next);
  })

  .delete(jsonParser, (req, res, next) => {
    const { item_id } = req.body;
    CartService.deleteItem(req.app.get("db"), item_id)
      .then(() => {
        res.status(204).end();
      })
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const { id, title, src, description, price } = req.body;
    const newItem = {
      id,
      title,
      src,
      description,
      price,
    };

    CartService.insertItem(req.app.get("db"), newItem)
      .then((item) => {
        res.status(201).location(`/checkout`).json(item);
      })
      .catch(next);
  });

module.exports = cartRouter;

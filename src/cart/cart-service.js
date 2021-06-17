const knex = require("knex");

const CartService = {
  getAllItemsByUser(knex, user_id) {
    return knex.select("*").from("cart").where({ user_id });
  },
  insertItem(knex, newItem) {
    return knex
      .insert(newItem)
      .into("cart")
      .returning("*")
      .then((row) => {
        return row[0];
      });
  },
  deleteItem(knex, id) {
    return knex("cart").where({ id }).delete();
  },
};
module.exports = CartService;

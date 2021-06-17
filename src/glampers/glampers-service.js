const GlampersService = {
  getAllGlampers(knex) {
    return knex.select("*").from("glampers");
  },
};

module.exports = GlampersService;

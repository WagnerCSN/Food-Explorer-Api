const knex = require("../../database/knex");

class PromotionUpdateRepository {
  async findByPromotion(id) {
    const promotion = await knex("promotion").select("*").where("id", id).first();

    return promotion;
  }

  async findByItem(promotion_id) {
    const searchPromotionItem = await knex("promotionItem").where({promotion_id}).first();

    return searchPromotionItem;
  }

  async update({ name, id }) {
    const promotionUpdated = await knex("promotion").where({ id }).update({name});

    return promotionUpdated;
  }

  async updateItem({ discount, promotion_id }) {
    const promotionItemUpdated = await knex("promotionItem").where("id", promotion_id ).update({discount});

    return promotionItemUpdated;
  }
}

module.exports = PromotionUpdateRepository;
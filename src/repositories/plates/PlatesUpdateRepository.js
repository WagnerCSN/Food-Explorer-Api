const knex = require("../../database/knex");

class PlatesUpdateRepository {
  async findByPlates(id) {
    const plate = await knex("plates").select("*").where("id", id).first();

    return plate;
  }

  async findByPlatesWithNameExist() {
    const plateWithNameExist = await knex("plates").select("*");

    return plateWithNameExist;
    }

  async findByTypePlate(typeOfPlate_id){
    const checkExistTypeOfPlate = await knex("typeOfPlates").select("*").where("id", typeOfPlate_id).first();

    return checkExistTypeOfPlate;
    }    

  async update({ name, description, cost, value, image, typeOfPlate_id, id }) {
    const plateUpdated = await knex("plates")
      .where({ id })
      .update({
        name,
        description,
        cost,
        value,
        image,
        typeOfPlate_id,
      });

    return plateUpdated;
  }
}

module.exports = PlatesUpdateRepository;

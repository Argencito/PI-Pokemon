const {Pokemon, Type} = require("../db")


const pokeDb = async () => {
    return await Pokemon.findAll({
        include: {
          model: Type,
          attributes: ["name"],
          through: { attributes: [] },
        },
      });
}
module.exports = {pokeDb}
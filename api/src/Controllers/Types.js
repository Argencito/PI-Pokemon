const axios = require("axios")
const { Type } = require("../models/Type")
const URL_TYPE = "https://pokeapi.co/api/v2/type"


const getType = async () => {
    try {
    const apiType = await axios.get(URL_TYPE)
    const nType = apiType.data.results.map((el) => el.name);
    const bdType= nType.forEach(async (e) => {
        await Type.findOrCreate({
          where: {
            name: e},
        });
      });
    
      return  bdType;     
      
  } catch (error) {
      console.error(error);
  }
}

module.exports = {getType}
const { Router } = require("express")
const router = Router()
const { Type} = require("../db")
const axios = require("axios")
const {getType} = require("../Controllers/Types")




//--------------------- get("/types") -----------------------//

router.get('/', async (req, res) => {

  let apiType = await axios.get("https://pokeapi.co/api/v2/type")
  console.log(apiType);
  let apiInfo = apiType.data;
  let types = apiInfo.results.map(e => e.name)

  types.forEach(el => {
    Type.findOrCreate({
      where: {
        name: el,
      }
    })
  });
  const allTypes = await Type.findAll();
  return res.status(200).send(allTypes);
})
      
     
     


module.exports = router;
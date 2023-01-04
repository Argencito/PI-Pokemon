const {pokeApi} = require("./PokeApi.js")
const {pokeDb} = require("./PokeDb.js")



const infoTotal = async () => {
    const api = await pokeApi()
    const db = await pokeDb()
    const dataAll = db.concat(api)
    
    return dataAll;
    
} 


module.exports = {infoTotal};
    
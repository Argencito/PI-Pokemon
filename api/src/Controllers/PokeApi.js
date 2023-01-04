const axios = require("axios");




const pokeApi = async ()  =>{

   try {
      let arrayPokemons = []
      let apiPokemons = await axios.get('https://pokeapi.co/api/v2/pokemon')
      let apiPokemonsB = await axios.get(apiPokemons.data.next)
      const apiPokemonsFull = apiPokemons.data.results.concat(apiPokemonsB.data.results)
      const apiUrlPokemons = apiPokemonsFull.map(data => axios.get(data.url))
      let apiPokemonsFinal = Promise.all(apiUrlPokemons).then( p => {
          p.map(e => {
              arrayPokemons.push({
                  id: e.data.id,
                  name: e.data.name,
                  hp: e.data.stats[0].base_stat,
                  attack: e.data.stats[1].base_stat,
                  defense: e.data.stats[2].base_stat,
                  speed: e.data.stats[5].base_stat,
                  height: e.data.height,
                  weight: e.data.weight,
                  types: e.data.types.map(m => {
                    return ({ 
                        name: m.type.name,
                    })
                    }),
                  img: e.data.sprites.other.dream_world.front_default
              })
      })
      return arrayPokemons
  })
  return apiPokemonsFinal
  } catch (error) {
      console.log(error)
  }

  
 }   
module.exports = {pokeApi}
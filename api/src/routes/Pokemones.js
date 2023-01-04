const { Router } = require("express")
const router = Router()
const {Pokemon, Type} = require("../db")
const {infoTotal} = require("../Controllers/infoTotal")




// ------------------- get("/pokemons") --------------------//

router.get("/", async (req,res) => {
    let {name} = req.query;
    let get_info = await infoTotal();

    try {
    
       
        if(name) {
        
            let pokemonName = get_info.filter(
                (pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()))
            pokemonName.length ? res.status(200).send(pokemonName) 
            : res.status(404).send({error:'Pokemon not found'})
         } else {
            res.status(200).send(get_info)
         }
         
        } 
            
     catch (error) {
        console.log(error);
    }
})


//--------------------- get("/id")------------------ /


router.get("/:id", async (req,res) => {
    const { id } = req.params;
    const info = await infoTotal()

    try {
        if(!id) {
        res.status(404).send("id requerido");
        } else {
            const idpoke = info.find((el) => el.id.toString() === id);
            res.status(200).json(idpoke)
        }
    } catch (error) {
        console.log(error);
    }
})



// ------------------------ post("/pokemons") --------------------------- /

router.post("/", async (req,res) => {
       const {id, name, height, weight,  attack, defense, types, hp, speed, img} = req.body;
       
       try {
        if(name  && types ) {
            const newPoke = await Pokemon.create({id, name, height, weight,  attack, defense, hp, speed, img})
            let typedb = await Type.findAll({
                where: {name: types },
            });
            newPoke.addType(typedb)
            res.status(200).send(`Nuevo pokemon creado con exito:${newPoke}`)
        } else {
            res.send("Datos necesarios")
        }
       } catch (error) {
        console.log(error);
       }
       



})

module.exports = router;
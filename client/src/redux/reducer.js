import { GET_ALL_POKEMONS, 
         GET_POKEMONS_TYPES,
         GET_TYPES, 
        FILTER_NAME, 
        FILTER_ATTACK,
        SEARCH_NAME,
        FILTER_CREATED,
        POST_POKEMONS,
        GET_POKEMONS_ID} from "./actions";

const initialState = {
    pokemons: [],
    allPokemons: [],
    types: [],
    detail: []
}

 export default function rootReducer(state = initialState, action) {
     switch (action.type) {

        case GET_ALL_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                
                allPokemons: action.payload
      // -----------------------------          
            }
        case GET_TYPES: 
             return{
                ...state,
                types:action.payload
            }
     // -----------------------------
        case POST_POKEMONS: 
             return{
                ...state,
     // -----------------------------           
            }  
        case GET_POKEMONS_ID: 
            return{
               ...state,
               detail:action.payload
           }

    // -----------------------------
        case GET_POKEMONS_TYPES:
 
            const pk = state.allPokemons;
            const pokemonsFilter =
        action.payload === "all"
          ? pk
          : pk.filter((pokemons) =>
              pokemons.types.map((type) => type.name).includes(action.payload)
            );
            
            return {
                ...state,
                pokemons: pokemonsFilter
                    }   
     // -----------------------------               
        case SEARCH_NAME:         
            return {
                 ...state,
                 pokemons: action.payload
                      };   
    // -----------------------------

        case FILTER_NAME:


            const sortedArr =
        action.payload === "asc"
          ? state.pokemons.sort(function (a, b) {
              if (a.name > b.name) return 1;
              if (b.name > a.name) return -1;
              return 0;
            })
          : state.pokemons.sort(function (a, b) {
              if (a.name > b.name) return -1;
              if (b.name > a.name) return 1;
              return 0;
            });
      return {
        ...state,
        pokemons: [...sortedArr],

            };
        // -----------------------------    
        case FILTER_ATTACK:
            const sortAttack =
            action.payload === "asc"
              ? state.pokemons.sort(function (a, b) {
                  if (a.attack > b.attack) return 1;
                  if (b.attack > a.attack) return -1;
                  return 0;
                })
              : state.pokemons.sort(function (a, b) {
                  if (a.attack > b.attack) return -1;
                  if (b.attack > a.attack) return 1;
                  return 0;
                });
             return {
            ...state,
            pokemons: [...sortAttack],
    // -----------------------------
                };
        
         case FILTER_CREATED:
                  
                    const createFilter = action.payload === "Db" ? state.allPokemons.filter(e => e.createdInDb) :  state.allPokemons.filter(e => !e.createdInDb)
            return{
                ...state,
                pokemons: createFilter
            }       
                
        default:
            return {...state}
     }


}
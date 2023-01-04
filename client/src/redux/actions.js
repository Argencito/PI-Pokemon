import axios from "axios"
export const GET_NAME = "GET_NAME"
export const GET_POKEMONS_TYPES = "GET_POKEMONS_TYPES"
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const GET_ATTACK = "GET_ATTACK"
export const GET_TYPES = "GET_TYPES"
export const FILTER_NAME = "FILTER_NAME"
export const FILTER_ATTACK = "FILTER_ATTACK"
export const SEARCH_NAME = "SEARCH_NAME"
export const FILTER_CREATED = "FILTER_CREATED"
export const POST_POKEMONS = "POST_POKEMONS"
export const GET_POKEMONS_ID = "GET_POKEMONS_ID"



 export function getAllPokemons  () {

    return async function (dispatch){
        
            let response = await axios.get("http://localhost:3001/pokemons");
            
             dispatch({
            type: GET_ALL_POKEMONS,
            payload: response.data
        })
            
    } 
 }

 export function getTypes  () {

    return async function (dispatch){
        
            let json = await axios.get("http://localhost:3001/types");
            
             dispatch({
            type: GET_TYPES,
            payload: json.data
        })
            
    } 
 }


 export function getByName (name) {


return async function (dispatch) {
   try {
     let jsonn = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
    console.log(jsonn);
     return dispatch({

       type: SEARCH_NAME,
       payload: jsonn.data
       
     })
     
     

   } catch {
     alert("Pokemon No Encontrado")

   }
 }
}

export function postPokemons  (payload) {
     
  
   return async function (){
        
      let jsoon = await axios.post("http://localhost:3001/pokemons", payload);
      
    return jsoon
      
} 
}

export function getPokemonsById (id) {

   return async function (dispatch){
       
           let json = await axios.get(`http://localhost:3001/pokemons/${id}`);
           
            dispatch({
           type: GET_POKEMONS_ID,
           payload: json.data
       })
           
   } 
}
 
 export function getPokemonsTypes  (payload) {
   
    return{                   
             
            type: GET_POKEMONS_TYPES,
            payload
                              
    }
 }

 export function getFilterName  (payload) {
   
    return{                   
             
            type: FILTER_NAME,
            payload
                              
    }
 }

 export function getFilterAttack (payload) {
   
   return{                   
            
           type: FILTER_ATTACK,
           payload
                             
   }
}

export function getFilterCreated  (payload) {
   
   return{                   
            
           type: FILTER_CREATED,
           payload
                             
   }


}

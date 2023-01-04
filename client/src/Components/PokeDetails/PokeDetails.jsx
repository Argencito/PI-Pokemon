import React from "react";
import { useDispatch ,useSelector} from "react-redux";
import { getPokemonsById } from "../../redux/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./PokeDetails.module.css"

const PokeDetails =  () =>{
  

  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.detail)

  const {id} = useParams()

  useEffect(()=>{
    dispatch(getPokemonsById(id))
    
  },[dispatch, id])

  return(
    <div className={styles.container}>
      <Link to="/home"><button className={styles.home} >BACK TO HOME</button></Link>
      
        { 
          pokemon &&
          <div className={styles.poke}>
            
                  
                    <h1 className={styles.name}>{pokemon.name}</h1>
                  
                   <div className={styles.img}>
                      <img src={pokemon.img} alt={`${pokemon.name} pokemons`} 
                       width="200px" heigth="200px" />
                    </div>
                      <p>Id: {pokemon.id}</p>
                      <p>Height: {pokemon.height}</p>
                      <p>Weight: {pokemon.weight}</p>
                      <p className={styles.types}>Types: {pokemon.types?.map(t=>`${t.name}  `)}</p>
                      <p>Health Points (hp): {pokemon.hp}</p>
                      <p>Attack: {pokemon.attack}</p>
                      <p>Defense: {pokemon.defense}</p>
                      <p>Speed: {pokemon.speed}</p>
                    </div>
               
      
        }
    </div>
  )
  }
export default PokeDetails
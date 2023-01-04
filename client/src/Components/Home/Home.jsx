import React  from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux"
import { getAllPokemons, getFilterName, getPokemonsTypes, getTypes, getFilterAttack, getFilterCreated} from "../../redux/actions"
import { NavLink} from "react-router-dom"
import PokeCard from "../PokeCard/PokeCard";
import Paginado from "../Paginado.jsx/Paginado";
import NavBar from "../NavBar/NavBar";
import styles from "./Home.module.css"
import Loading from "../Loading/Loading";


export default function Home (){

    const dispatch = useDispatch()
    const allPokemons = useSelector((state)=>state.pokemons)
    const allTypes = useSelector((state)=>state.types)

   
    
    
    /* PAGINADO*/ 
    // DECLARO MI ESTADO LOCAL 
    const [currentPage, setCurrentPage] = useState(1)
    // CANTIDAD DE PK POR PAG
    const [pokemonsPerPage, setPokemonsPerPage] = useState(12)
    const indexOfLastPokemons = currentPage * pokemonsPerPage 
    const indexOfFirstPokemons = indexOfLastPokemons - pokemonsPerPage 
    
    const currentPokemons = allPokemons.slice(indexOfFirstPokemons,indexOfLastPokemons)


    
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    useEffect(()=>{
        dispatch(getAllPokemons())
        dispatch(getTypes())
    },[dispatch])
    

   

    function handleClick(e){
        e.preventDefault();
        dispatch(getAllPokemons());
    }

    function handleFilterCreate(e){
        e.preventDefault();
        dispatch(getFilterCreated(e.target.value));
    }
    
    function handleFiltered(e){
        e.preventDefault();
        dispatch(getPokemonsTypes(e.target.value));
        
    }

    function handleFilterName(e){
        e.preventDefault();
        dispatch(getFilterName(e.target.value));
        
    }

    function handleFilterAttack(e){
        e.preventDefault();
        dispatch(getFilterAttack(e.target.value));
        
    }



    return (
        
        <div className={styles.fondo2}>
            
              
                <NavBar />
                        
                <div className={styles.apidb}>
                   
                { /* BOTON PARA TRAER POKMENOS API O DB*/}
                <select className={styles.all} onChange={e => {handleFilterCreate(e)}}>
                    <option value="All">All Pokemons</option>
                    <option value="Api">Api Pokemons</option>
                    <option value="Db">Create by Users</option>
                </select> 
                     
                {/* POR A-Z */}
               <select className={styles.az} onChange={e => handleFilterName(e)}>
                    <option value="name">Sort By Name</option>
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                </select>

                {/* BOTON RELOAD POKEMON */}  
                <button className={styles.reload} onClick={e => {handleClick(e)}}>Refresh Pag</button>
                
                {/* POR TYPES */}
                <select className={styles.types} onChange={e => handleFiltered(e)} >
                <option value="all">All Types</option>
                {allTypes?.map(m=>{
                                return(
                                    <option value={m.name} key={m.id}>{m.name}</option>
                                )
                          })}     

                </select>

               {/* FILTRO POR FUERZA  */}
                    <select className={styles.fuerza} onChange={e => handleFilterAttack(e)}>
                        <option value="attack">Sort by Attack</option>
                        <option value="asc">Stronger</option>
                        <option value="desc">Weaker</option>
                </select>
                </div>
                
                  {/* PAGINADO */}
                  <Paginado
                  pokemonsPerPage={pokemonsPerPage}
                  allPokemons={allPokemons.length}
                  paginado={paginado}
                  />

                  {/* INICIO DE PokeCard*/}
                <div className={styles.card}>
                      
                      {currentPokemons.length === 0 
                      ? <Loading/> 

                      :( currentPokemons.map(e => (
                        <div className={styles.pcard} key={e.id} >
                        <NavLink to={`/home/${e.id}`} >
                          <PokeCard
                          key={e.id}
                          id={e.id}
                          name={e.name}
                          img={e.img}
                          types={e.types}
                          />
                        </NavLink>
                        </div>
                        )))
                         }        
            </div>  
           <div className={styles.br}>
    
           </div>
            
        </div>   
    )
}


    




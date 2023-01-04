import React from "react";
import styles from "./Paginado.module.css"
export default function Paginado ({pokemonsPerPage, allPokemons,paginado}) {

    const pageNumbers =[]
    // divido personajes por pagina 
    for (let i=1; i<= Math.ceil(allPokemons/pokemonsPerPage); i++){
        pageNumbers.push(i+0)
    }
    return(

          // map renderixa cada uno y lo renderiza por separado
        <nav>           
            <ul className={styles.pagination}>
                {pageNumbers &&
                pageNumbers.map(number =>(
                    <li className="number" key={number}>
                    <button className={styles.button} onClick={() => paginado(number)}>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
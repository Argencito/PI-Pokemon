import React from "react";
import { Link } from "react-router-dom";
import  styles from "./Landing.module.css"
const Landing = () =>{
    return(
        <div className={styles.fondo}>
        <Link to="/home">
        <button className={styles.Home}>Go!</button>
        </Link>

        </div>
    )
}

export default Landing
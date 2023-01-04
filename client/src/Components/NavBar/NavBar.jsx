import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import styles from "./NavBar.module.css"

const NavBar = () =>{
    return(
        <div className={styles.container} >           
            <Link  to="/home"><button className={styles.home}>Home</button></Link>
            <Link  to="/create"><button className={styles.create}>Create Pokemon</button></Link>
            <Search />                  
        </div>
    )
}

export default NavBar
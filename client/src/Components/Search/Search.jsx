import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getByName } from "../../redux/actions";
import styles from "./Search.module.css"
const Search =  () =>{


  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getByName(name));
    console.log(name);
    setName("")
  }

  return(
    <form onSubmit={(e) => {
      handleSubmit(e); }}>
        <input className={styles.searchi} 
        type="text"  placeholder="Search pokemon..." 
        value={name} onChange={(e)=>handleInputChange(e)}/>
        <button  className={styles.searchb} 
        type="submit" >Search
        </button>
    </form>  
  )


  }
export default Search
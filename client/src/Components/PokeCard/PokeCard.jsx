import React from "react";
import  styles from "./PokeCard.module.css"

const PokeCard =  ({ name,img, types }) =>{
  

  return (
    
    
              <div className={styles.card} >
                    <h2 className={styles.texto} >{name}</h2>
                    <img src={img} alt="Img not found"  width="150px" heigth="150px"/>
                  
                    <div> 
                    {types.map((e,index) => (<h3 className={styles.texto} key={index}>{e.name}</h3>))}
                    </div>
                </div>
  
    
  
  );
  }
export default PokeCard
import React from "react";
import { Link } from "react-router-dom";
import { postPokemons, getTypes } from "../../redux/actions";
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./PokeCreate.module.css"
import Validate from "./ValidateErrors";

const PokeCreate = () =>{

    const dispatch = useDispatch();
    const Alltypes = useSelector(state => state.types);
    
    const [boton, setBoton] = useState(true)

   // MANEJO DE ERRORES
    const [errors,setErrors] = useState({})


   // MANEJO DE ESTADO EN INPUT
    const [input, setInput] = useState({  //creo el estado input que es como viene el formulario por default
      name: '', 
      img: '',
      hp: '',
      attack: '',
      defense: '',
      speed: '',
      height: '',
      weight: '',
      types: [],
    })

   //  ACTIVAR BOTON DE CREAR
    useEffect(() => {
      if(!errors.name && !errors.hp && !errors.attack && !errors.defense && !errors.speed && !errors.height && !errors.weight && !errors.img
        && input.name && input.hp && input.attack && input.defense && input.speed && input.height && input.weight){
          setBoton(false)
      }else {
          setBoton(true)
      }

  }, [errors, input])
  



    useEffect(()=>{
      dispatch(getTypes());
    },[dispatch])


  
    function handleInputChange(e) {          //recibe un evento, que es un cambio en el input
      setInput({                             //setInput es la funcion que sabe como modificar el estado input
        ...input,
        [e.target.name]: e.target.value      //a la prop que coincida con el name(name, img, speed...) le asigna el valor que se escribió en el input
      })
      setErrors(Validate({                   //cuando haya un cambio, setea el estado errors con el resultado de pasarle a la funcion validate                                        
        ...input,                            //el input modificado. el estado errors podria ser errors = {name: 'se requiere un nombre'} por ej.
        [e.target.name]: e.target.value
      }))
    }
  

    function handleSelect(e) {                      //recibe el tipo que se seleccionó en el selector
      if(!input.types.includes(e.target.value)){   //evita que se repitan los tipos
        setInput({
            ...input,
            type: [...input.types, e.target.value],  //al array de la prop type le añade el nuevo tipo que se seleccionó
        })
    }
        setInput({
         
          ...input,
          types:[...input.types, e.target.value]
         
          
        })
      
    }
    
    
  


    function handleDelete(e) {                        //recibe un evento, que es el click en la X de un tipo
      setInput({
        ...input,
        types: input.types.filter(type => type!== e)    //se filtra el array de la prop type, dejando pasar solo aquellos tipos que no coinciden con el clickeado 
      })
    }
  
    function handleSubmit(e) {                //recibe toda la info del formulario
      e.preventDefault();
      dispatch(postPokemons(input))           //crea un pokemon con la info que se fue guardando en el estado input
      setInput({                               //resetea el estado input a su estado original
        name: "",
        img: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: [],
      })
    }
  
    return(
      <div className={styles.fondo}>
      <div className={styles.container}> 
      <Link to="/home"><button className={styles.home}>Regresar a Home</button></Link>
        <form className={styles.form} onSubmit={handleSubmit} >
            
            <br/><br/>
            <legend className={styles.h1} >CREATE POKEMON </legend>
            
            <div className={styles.datos}>
            <label>Name : </label>
            <input type="text" name="name" value={input.name} onChange={handleInputChange} />
            {errors.name && (<p>{errors.name}</p>)}
            </div>
            <br />
            
            <div className={styles.datos}>
            <label>Image : </label>
            <input type="texto" name="img" value={input.img} onChange={handleInputChange} placeholder='Imagen HTTP' />
            {errors.image && (<span>{errors.image}</span>)}
            </div>
            <br />

            <div className={styles.datos}>
            <label>Life : </label>
            <input type="number" name="hp" value={input.hp} onChange={handleInputChange} />
            {errors.hp && (<span>{errors.hp}</span>)}
            </div>
            <br />

            <div className={styles.datos}>
            <label>Attack : </label>
            <input type="number" name="attack" value={input.attack} onChange={handleInputChange} />
            {errors.attack && (<span>{errors.attack}</span>)}
            </div>
            <br />

            <div className={styles.datos}>
            <label>Defense :</label>
            <input type="number" name="defense" value={input.defense} onChange={handleInputChange} />
            {errors.defense && (<span>{errors.defense}</span>)}
            </div>

            <br />
            <div className={styles.datos}>
            <label>Speed : </label>
            <input type="number" name="speed" value={input.speed} onChange={handleInputChange} />
            {errors.speed && (<span>{errors.speed}</span>)}
            </div>
            <br />

            <div className={styles.datos}>
            <label>Height : </label>
            <input type="number" name="height" value={input.height} onChange={handleInputChange} />
            {errors.height && (<span>{errors.height}</span>)}
            </div>
            <br />
            <div className={styles.datos}>

            <label>Weight : </label>
            <input type="number" name="weight" value={input.weight} onChange={handleInputChange} />
            {errors.weight && (<span>{errors.weight}</span>)}
            <br />
            </div>

            <div className={styles.datos}>
            <label>TYPES</label> 
            <select name="types" onChange={handleSelect}>
              {Alltypes?.map(type => {
                  return(
                    <option key={type.id} value={type.name}>{type.name}</option>
                  )
              })}
            </select>
            {input.types.map(e => {
                return(
                  <div key={e}>
                    <button onClick={() => handleDelete(e)}>x</button><span> {e} </span>
                  </div>
                )
              })
            }
            <br />
            </div>
          <div>
          <br />
          <button type="submit" disabled={boton} >SUBMIT</button>
          </div>
          <br />
        <br />
        </form>
        <Link to="/home"><button className={styles.home}>Regresar a Home</button></Link>
      </div>
      </div>
    )
        
          }

export default PokeCreate
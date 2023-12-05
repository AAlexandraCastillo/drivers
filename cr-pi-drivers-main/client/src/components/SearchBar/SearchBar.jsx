import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions";
import style from './SearchBar.module.css'
const SearchBar=()=>{

    const [namedriver,setNamedriver]=useState('')
    const dispatch=useDispatch()
const handleChange=(event)=>{
    setNamedriver(event.target.value)
};
const searchName=()=>{
  dispatch(getByName(namedriver))
}
    return (
        <div >
       <input placeholder="Ingrese el nombre del driver" className={style.input} type="search" onChange={handleChange}></input>
       <button className={style.button}  onClick={searchName}>Buscar</button>
        </div>
    )
}
export default SearchBar;
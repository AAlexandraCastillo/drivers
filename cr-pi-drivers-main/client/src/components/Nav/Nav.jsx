import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filtByApi,filtByDb,filterByOrder } from "../../redux/actions";
import style from './Nav.module.css'


const Nav=()=>{
const [selectteam,setSelectteam]=useState("")
const[ord,setOrd]=useState("")
const dispatch=useDispatch()

const handleTeamApi=()=>{
        dispatch(filtByApi(selectteam))};

const handleTeamDb=()=>{
    dispatch(filtByDb(selectteam))};
const handleOrder=()=>{
    dispatch(filterByOrder(ord))
}
 return( 
    <div className={style.container}>
       
        <div>
            
        <select value={selectteam} onChange={(e)=>setSelectteam(e.target.value)}>
            <option value=""  >Team</option>
            <option>Mercedes</option>
            <option>Renault</option>
            <option>Ferrari</option>
            <option>Lotus</option>
            <option>Williams</option>
            <option>Toyota</option>
            <option>Jordan</option>
            <option>Prost</option>
            <option>Spyker</option>
            </select>
            <button onClick={handleTeamApi} className={style.buttonApi}  >API</button>
            <button onClick={handleTeamDb} className={style.buttonApi} >DB</button>
            </div>
            <SearchBar/>
            <div>
            <select value={ord} onChange={(e)=>setOrd(e.target.value)}>
            <option value="">ORDEN</option>
           <option>A-Z</option>
           <option>Z-A</option>
           <option>CLASE-MAYOR</option>
           <option>CLASE-MENOR</option>
           
            </select>
            <button className={style.ord} onClick={handleOrder}>ORDENAR</button>
            </div>
            
       

    </div>
 )
}
export default Nav;
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getById, updateDetail, } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from './Detail.module.css'



const Detail=()=>{
    const {id}=useParams()
    const dispatch=useDispatch()
    const detail= useSelector((state)=>state.detailDriver)
    console.log(detail)
    useEffect(()=>{dispatch(getById(id)); return()=>{ dispatch(updateDetail())}},[id])
    console.log(detail)
    return ( <div className={style.miDiv}>
        {detail.image?<div className={style.card}>
        <img src={detail.image} alt={detail.name}/>
        <h2>*Name: {detail.name}</h2>
        <h2>*Apellido: {detail.surname}</h2>
        <h2>*Descripcion: {detail.description}</h2>
        <h2>*Nacionalidad: {detail.nationality}</h2>
        <h2>Clase:{detail.dob}</h2>
        <h2>Escuderias:{detail.teams}</h2>
    
    </div>:''}
    <Link to={'/home'}><button>Home</button></Link>
    </div>)}


export default Detail;
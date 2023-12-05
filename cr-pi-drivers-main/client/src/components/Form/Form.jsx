import validation from "../../validation";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { createDriver, getTeams } from "../../redux/actions";
import style from './Form.module.css'
const Form=()=>{
const dispatch=useDispatch()
const teams=useSelector((state)=>state.teams)

const[data,setData]=useState({
    name:"",
    surname:"",
    description:"",
    image:"",
    nationality:"",
    dob:"",
    teams:""
});
const[errors,setErrors]=useState({});

const handleChange=(event)=>{
    setErrors(validation({...data,[event.target.name]:event.target.value}))
     setData({...data,[event.target.name]:event.target.value})
};

const handleTeamButton=(team)=>{
    setData((dataAnterior)=>({
      ...dataAnterior,teams:dataAnterior.teams.length<1?team:dataAnterior.teams+ "," + team
  }))}
  const handleSubmit=(event)=>{
    event.preventDefault();
    const validationErrors=validation(data)
    if(Object.keys(validationErrors).length ===0){
        dispatch(createDriver(data))
        setData({  name:"",
        surname:"",
        description:"",
        image:"",
        nationality:"",
        dob:"",
        teams:""})

    }
else{window.alert('Datos ingresados incorrectos ')}};


useEffect(()=>{dispatch(getTeams())},[])

    return (
           <div className={style.div}>
           <form className={style.miForm} onSubmit={handleSubmit}>
    
    <label>  Nombre:
          <input name="name" type="text" onChange={handleChange}></input>
        {errors.name && data.name?<p>{errors.name}</p>:''}
        {errors.name1 &&data.name?<p>{errors.name1}</p>:''}
    </label>

    <label>  Apellido:
          <input name="surname" type="text" onChange={handleChange}></input>
        {errors.surname && data.surname?<p>{errors.surname}</p>:''}
        {errors.surname1 && data.surname? <p>{errors.surname1}</p>:''}
    </label>
    
    <label>Descripcion:
        <input name="description" type="text" onChange={handleChange}></input>
        {errors.desc && data.description?<p>{errors.desc}</p>:''}
    </label>

    <label>imagen:  
           <input name="image" type="text" onChange={handleChange}></input>
        {errors.image && data.image?<p>{errors.image}</p>:''}
    </label>

    <label>Nacionalidad:
        <input name="nationality" type="text" onChange={handleChange}></input>
        {errors.nat && data.nationality?<p>{errors.nat}</p>:''}
        {errors.nat1 && data.nationality?<p>{errors.nat1}</p>:''}
    </label>

    <label>Clase:
        <input name="dob" type="date" onChange={handleChange}></input>
        {errors.dob?<p>{errors.dob}</p>:''}
    </label>
   <hr></hr>
    <p>Selecciona 1 o mas teams:</p>
                 { teams.map((team)=>(
                    <button 
                    key={team}
                  onClick={() =>handleTeamButton(team)} 
                  className={
                        data.teams.includes(team) ? "selected" : ""
                      } disabled={data.teams.includes(team)}>{team}</button>
                      ))}{data.teams.length<1?<p>{errors.teams}</p>:''}
                    
                     { data.name&&data.surname&&data.description&&data.image&&data.nationality&&data.dob&&data.teams?<button className={style.submit} type="submit">SUBMIT</button>:''}
</form>
</div>
)
};

export default Form;
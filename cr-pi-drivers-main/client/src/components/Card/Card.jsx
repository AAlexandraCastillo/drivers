import { Link } from "react-router-dom";
import style from './Card.module.css'

const Card=({name,image,teams,id,dob})=>{


 return (<div className={style.Card}>
  
   <img src={image} alt={name}/>
   <Link to={`/detail/${id}`}>
   <h1>{name}</h1>
   <h2>Escuderìas: {teams}</h2>
   <h2>Clase:({dob})</h2>
   </Link>
 </div>)
}
export default Card;
import Card from "../Card/Card"
import style from './Cards.module.css'

const Cards=({drivers,currentPage,permitPage})=>{
const startIndex=(currentPage-1)*permitPage;
const endIndex=startIndex+permitPage;
const driverRender=drivers.slice(startIndex,endIndex)

    return(
      <div className={style.miDiv}>
 {driverRender.map((d)=>(
        <div className={style.card}>
    <Card
    key={d.id}
    id={d.id}
    name={d.name} 
    image={d.image}
    dob={d.dob}
    teams={d.teams?d.teams: "indefinido"}
    />
        </div>
        
    ))
    
 }
 </div>)}
export default Cards;
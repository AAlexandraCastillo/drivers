import { Link } from "react-router-dom";
import style from './Welcome.module.css'
const Welcome=()=>{
    return ( <div className={style.div}>
        <Link to={'/home'}><button>HOME</button></Link>
        
    </div>)
}
export default Welcome;
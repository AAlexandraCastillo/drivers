import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getDrivers } from "../../redux/actions";
import Cards from "../Cards/Cards";
import Nav from "../Nav/Nav";
import Pagination from "../Pagination/Pagination";

import style from './Home.module.css'

const Home=()=>{
    const dispatch =useDispatch()
    const drivers =useSelector((state)=>state.allDrivers)
    const[currentPage,setCurrentPage]=useState(1)
    const permitPage=9;


    useEffect(()=>{dispatch(getDrivers())},[]);

  
    return (
        <div className={style.miDiv}>
            <Nav/>
   <Cards drivers={drivers} currentPage={currentPage} permitPage={permitPage}/>
  <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={Math.ceil(drivers.length / permitPage)}/>
   </div>
    )
}
export default Home;
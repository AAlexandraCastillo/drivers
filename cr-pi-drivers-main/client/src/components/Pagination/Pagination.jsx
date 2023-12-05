import style from './Pagination.module.css';
import { Link } from 'react-router-dom';



const Pagination=({currentPage,totalPages,setCurrentPage})=>{
  const pageNumbers = Array.from({ length: totalPages },(_, index) => index + 1)
  return (
      <div className={style.div}>
          <button onClick={()=> setCurrentPage(currentPage-1)} disabled={currentPage === 1} >Anterior</button>
          {pageNumbers.map((pageNumber) => (
         <button className={style.b}
         key={pageNumber}
         onClick={() => setCurrentPage(pageNumber)}
         disabled={currentPage === pageNumber}
      >
        {pageNumber}
      </button>
    ))};
          
    <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={currentPage === totalPages}> Siguiente</button>
       <Link to={'/form'}>  <button className={style.buttonCreate}>Crear driver</button></Link>
      </div>
  )};

export default Pagination;


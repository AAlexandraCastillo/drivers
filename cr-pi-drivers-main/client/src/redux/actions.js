import axios from 'axios';
const URL='http://localhost:3001/drivers/'


export const getDrivers=()=>{
    return async (dispatch)=>{
        try {
            const {data}= await axios(URL)
            return dispatch({type:'GET_DRIVERS', payload:data})
        } catch (error) {
            console.error('Error al requerir los drivers', error)
        }}};

export const getByName=(name)=>{
    return async (dispatch)=>{
        try {
            const response = await axios(URL+`name?name=${name}`)
            const driver=response.data[0].name
            console.log("soy la data",driver)
            return dispatch({type:'GET_BY_NAME', payload:driver})
            
        } catch (error) {
            console.error('Error al buscar por name', error)
        }
    }
};
export const getById=(id)=>{
 return async (dispatch)=>{
    try {
        console.log(id)
        const response= await axios.get(URL+id)
        console.log(response)
       return dispatch({type:'GET_BY_ID',payload:response.data})
        
    } catch (error) {
        console.error('Error al buscar por id',error)
    }
 }

 }
;
export const updateDetail=()=>{
    return{type:'UPDATE_DETAIL'}
  
}
export const filtByApi=(team)=>{
return {type:'FILT_BY_API', payload:team}
}
export const filtByDb=(team)=>{
    return {type:'FILT_BY_DB', payload:team}
}
export const filterByOrder=(order)=>{
    return{type:'FILTER_BY_ORDER',payload:order}
}
export const getTeams=()=>{
    return async (dispatch)=>{
        try { const {data}= await axios('http://localhost:3001/teams')
          return dispatch({type:'GET_TEAMS',payload:data.slice(0,14)})
        } catch (error) {
            console.error('Error al requerir teams', error)
        }
    }
}

export const createDriver=(data)=>{
    const{name,surname,image,description,nationality,dob,teams}=data
    if(name&&surname&&image&&description&&nationality&&dob&&teams){
    return async(dispatch)=>{
        
        try { const response= await axios.post('http://localhost:3001/drivers',data) 
        const newDriver=response.data
      dispatch({type:'Create_Driver',payload:newDriver})
        window.alert('Creado con exito')
        
        } catch (error) {
            console.error('Error al crear driver', error)
        }
        
    }}
    else(window.alert('Faltan datos'))
}
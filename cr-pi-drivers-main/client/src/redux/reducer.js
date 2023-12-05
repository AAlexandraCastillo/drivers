
const initialState={
    allDrivers:[],
    copyDrivers:[],
    detailDriver:[],
    teams:[]
}

const reducer=(state=initialState,action)=>{
switch(action.type){
    case 'GET_DRIVERS': return { ...state, allDrivers:action.payload,copyDrivers:action.payload}
    case 'GET_BY_NAME':{ const driverFiltered=state.copyDrivers.filter((d) => d.name ===action.payload);
    return {...state, allDrivers:driverFiltered}}
    case 'GET_BY_ID':return {...state, detailDriver:action.payload}
    case 'UPDATE_DETAIL':{return{...state, detailDriver:[]}}
    case 'FILT_BY_API': {const filteredApi=state.copyDrivers.filter((d)=>d.teams?.includes( action.payload) && typeof d.id === 'number' );
    return{...state,allDrivers:filteredApi}
   };
   case 'FILT_BY_DB':{const filteredByDb=state.copyDrivers.filter((d)=>d.teams?.includes(action.payload) && !/^\d+$/.test(d.id))
  return {...state,allDrivers:filteredByDb}
   };
   case 'FILTER_BY_ORDER':{
    const driverFiltered=[...state.allDrivers].sort((a,b)=>{
        if(action.payload ==='A-Z'){return a.name.localeCompare(b.name)}
        if(action.payload==='Z-A'){return b.name.localeCompare(a.name)}
        if(action.payload ==='CLASE-MAYOR'){return parseInt(a.dob.split(' - ')[0])-parseInt(b.dob.split(' - ')[0])}
        else{return parseInt(b.dob.split(' - ')[0])-parseInt(a.dob.split(' - ')[0])}
        
    })
    return{...state,allDrivers:driverFiltered}
   }
   case 'GET_TEAMS':return {...state,teams:action.payload}
   case 'CREATE_DRIVER': return{...state,allDrivers:[...state.allDrivers,action.payload]}
     default: return {...state}
}
}
export default reducer;
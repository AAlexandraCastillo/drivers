const{functionAux}=require('../utils/functionAux')

const getByName= async (req,res)=>{
 const {name}=req.query
 if(name){
try {
    const allDriver= await functionAux()
    const driverFilter=allDriver.filter(driver=> driver.name.toLowerCase().includes(name.toLowerCase()))
    console.log(driverFilter)
    const resultLimited=driverFilter.length>0?driverFilter.slice(0,15):''
    resultLimited.length>0?res.status(200).json(resultLimited):res.status(400).json("No se encontraron drivers")   
} catch (error) {
    res.status(500).send({error:error.message})
    
}
 }
else {res.status(404).send({error:"Insert name"})}
}
module.exports={
    getByName,
}
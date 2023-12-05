const {functionAux}=require('../utils/functionAux')
const axios=require('axios')
const{Driver,Team}=require('../db')

const getById=async (req,res)=>{
   const id=req.params.idDriver;
   const numeric=Number(id)
   if(!isNaN(numeric)){
try {
    const {data}=await axios('http://localhost:5000/drivers')
    const driverApi=data.find( driver => driver.id===numeric)
    if(driverApi){
        const driverById={
            id:driverApi.id,
            name:driverApi.name.forename,
        surname:driverApi.name.surname,
        description:driverApi.description?driverApi.description:"Sin description",
        image:driverApi.image.url?driverApi.image.url:"https://i0.wp.com/ellatinoonline.com/wp-content/uploads/2018/05/los-autos-mas-caros-del-mundo.jpg?fit=670%2C350&ssl=1",
        nationality:driverApi.nationality?driverApi.nationality:"Indefinido",
        dob:driverApi.dob?driverApi.dob:"Indefinido",
        teams:driverApi.teams?driverApi.teams:"Indefinido"
        }
       return res.status(200).json(driverById)
    }else{res.status(404).json("Driver not found by api")}
} catch (error) {
    res.status(500).send({error:error.message})
}}

   else{
    try {
        const driverDb= await Driver.findOne({
            where:{id:id},
            include: [{
                model: Team,
                through: { attributes: []}
            }]
        });
        if(driverDb){
            console.log("soy el driverdb",driverDb)
            const teams=driverDb.Teams?.map(team => team.name);
            const driverData={
                id:driverDb.id,
                name:driverDb?.name,
                surname:driverDb?.surname,
                description:driverDb?.description,
                image:driverDb?.image,
                nationality:driverDb?.nationality,
                dob:driverDb?.dob,
                teams:teams?.join(",")
            }
            return res.status(200).json(driverData)
        }
        else{ res.status(404).send({error:"Driver not found db"})}
    } catch (error) {
        console.error(error)
       res.status(500).send({error:error.message}) 
    }
   }






};
    module.exports={
        getById,
    }
const {functionAux}=require('../utils/functionAux.js')

const getDriver= async(req,res)=>{
try {
    const allDriver= await functionAux()
    res.status(200).json(allDriver)
} catch (error) {
    res.status(404).send({error:error.message})
}
}
module.exports={
    getDriver,
}
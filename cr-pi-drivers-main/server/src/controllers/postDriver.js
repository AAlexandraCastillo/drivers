const{Driver,Team}=require('../db')

const postDriver= async (req,res)=>{

    try {
        const{name,surname,description,image,nationality,dob,teams}=req.body
    if(!name && !surname && !description && !image && !nationality && !dob && !teams){res.status(404).json("Faltan datos")}
    const existingDriver = await Driver.findOne({
        where: {
          name,
        }
      });
    if(existingDriver){res.status(400).send({error:"No puedes crear un driver ya existente"})}
    const newDriver= await Driver.create({
        name,
        surname,
        description,
        image,
        nationality,
        dob
    });
    const teamsArray=teams.split(",").map(team => team.trim())
    for (const teamName of teamsArray) {
        let teamFind= await Team.findOne({ where: { name: teamName } });
        if (!teamFind) {
          teamFind = await Team.create({ name: teamName });}
        await newDriver.addTeam(teamFind);}

        const responseDriver={
            id:newDriver.id,
            name:newDriver.name,
            surname:newDriver.surname,
            description:newDriver.description,
            image:newDriver.image,
            nationality:newDriver.nationality,
            dob:newDriver.dob,
            teams:teamsArray.join(", ")
        };
        res.status(200).json(responseDriver)

        
    } catch (error) {
        res.status(404).send({error:error.message})
    }

}
module.exports={
    postDriver,
}
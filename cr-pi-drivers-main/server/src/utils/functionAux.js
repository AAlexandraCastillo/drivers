const axios = require('axios');
const { Driver, Team } = require('../db');

const functionAux = async () => {
    try {
        const { data } = await axios('http://localhost:5000/drivers');
        const driverApi = data?.map(driver => ({
            id: driver.id,
            name: driver.name.forename,
            surname: driver.name.surname,
            description: driver.description ? driver.description : "Sin description",
            image: driver.image.url ? driver.image.url : "https://img.redbull.com/images/q_auto,f_auto/redbullcom/2012/09/06/1331576040029_1/f1-historia-ralf-schumacher-williams-2001",
            nationality: driver.nationality ? driver.nationality : "Indefinido",
            dob: driver.dob ? driver.dob: "Indefinido",
            teams: driver.teams ? driver.teams : "Indefinido"
        }));

        const driverDb = await Driver.findAll({
            include: Team
        });
        const driverJson = driverDb.map(driver => {
            const { id, name, surname, description,image,nationality,dob } = driver;
            const teams = driver.Teams.map(team => team.name).join(',');
            return {
            id,
            name,
            surname,
            description,
           image,
           nationality,
           dob,
           teams}
         
        });
        if (driverJson.length > 0) {
            return [...driverJson, ...driverApi];
        } else {
            return driverApi;
        }
    } catch (error) {
        console.error("Error en la función functionAux:", error);
        throw error; // Propagar el error para que sea manejado en la función getByName
    }
};

module.exports = { functionAux };
const axios = require('axios');
const { Team } = require('../db');

const getTeam = async (req, res) => {
    const { data } = await axios('http://localhost:5000/drivers');
    const uniqueTeam = new Set();

    data.forEach((driver) => {
        if(driver.teams){
        const drivTeam = driver.teams
          .split(",")
          .map((item) => item.trim());
        drivTeam.forEach((teams) => {
            uniqueTeam.add(teams);
        });
    }});

    const newTeam = [...uniqueTeam];

    if (newTeam.length) {
        await Team.bulkCreate(newTeam.map((name) => ({ name })));
    }

    const teamFinal = await Team.findAll();
    const nameTeam = teamFinal.map((team) => team.name);

    res.status(200).json(nameTeam);
}

module.exports = {
    getTeam,
};
const { Router } = require("express");
const {getDriver}=require('../controllers/getDriver');
const { getById } =require("../controllers/getById");
const{getByName}=require('../controllers/getByName')
const{postDriver}=require('../controllers/postDriver');
const { getTeam } = require("../controllers/getTeam");

const router = Router();
router.get('/drivers', getDriver)
router.get('/drivers/name',getByName)
router.get('/drivers/:idDriver',getById)
router.post('/drivers',postDriver)
router.get('/teams',getTeam)


module.exports = router;

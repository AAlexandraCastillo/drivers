const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    id: {
      type:DataTypes.UUID,
      primaryKey:true,
      allowNull:false,
      defaultValue:UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname:{
      type:DataTypes.STRING,
      allowNull:false
     },
     description:{
      type:DataTypes.STRING(300),
      allowNull:false,
    },
    image:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    nationality:{
      type:DataTypes.STRING,
      allowNull:false
    },
    dob:{
      type:DataTypes.STRING,
      allowNull:false
    },
  });
};
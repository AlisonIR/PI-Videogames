const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false

    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false
    },

    releasedate:{
      type: DataTypes.INTEGER,
      allowNull: false

    },

    rating:{
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {timestamps: false});
};

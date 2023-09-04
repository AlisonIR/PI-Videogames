const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false

    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    image:{
      type: DataTypes.TEXT,
      allowNull: false
    },

    releasedate:{
      type: DataTypes.STRING,
      allowNull: false

    },

    rating:{
      type: DataTypes.FLOAT,
      allowNull: false
    },

    //Distingo entre API Y BD
    createDB: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }

  }, {timestamps: false});
};

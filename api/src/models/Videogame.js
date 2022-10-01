const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    plataforms: {
      type: DataTypes.STRING,
      allowNull: false
    },
    releaseDate: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};

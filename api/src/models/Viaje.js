const { DataTypes } = require("sequelize");
const { createDeflate } = require("zlib");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "viaje",
    {
      id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true,
		},
      userId: {
        type: DataTypes.UUID,
        allowNull:false
      },
      driverId: {
        type: DataTypes.UUID,
        allowNull:false
      },
      estado: {
        type: DataTypes.ENUM(
          "realizado",
          "cancelado"
        ),
        defaultValue: "realizado",
        allowNull: false,
        validate: {
          notEmpty: true,
          isIn: [["realizado", "cancelado"]],
        },
      },
      montoTotal: {
        type: DataTypes.FLOAT,
      },
      distancia: {
        type: DataTypes.INTEGER
      },
      fecha: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        validate: {
          notEmpty: true,
          isDate: true,
        },
      },
    },
    { timestamps: false }
  );
};

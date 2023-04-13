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
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userID: {
        type: DataTypes.TEXT,
      },
      estado: {
        type: DataTypes.ENUM(
          "realizado",
          "cancelado"
        ),
        defaultValue: "realizada",
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

"use strict";

module.exports = function(sequelize, DataTypes) {
  var Purchase = sequelize.define("Purchase", {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Purchase.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Purchase;
};

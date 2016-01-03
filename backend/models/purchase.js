"use strict";

module.exports = function(sequelize, DataTypes) {
  var Purchase = sequelize.define("Purchase", {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Purchase.belongsTo(models.Purchase, {
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

'use strict';
module.exports = (sequelize, DataTypes) => {
  const bank = sequelize.define('bank', {
    country: DataTypes.STRING,
    balance: DataTypes.STRING,
    datestay: DataTypes.DATEONLY,
    dateleave: DataTypes.DATEONLY,
    dailyincrement: DataTypes.INTEGER,
    totalcost: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  bank.associate = function({user}) {
    // associations can be defined here
    bank.belongsTo(user)
  };
  return bank;
};
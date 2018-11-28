module.exports = (sequelize, DataTypes) => {
  const Bank = sequelize.define('bank', {
    Country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Balance: {
      type: DataTypes.INTEGER
    },
    DateStay: {
      type: DataTypes.DATEONLY
    },
    DateLeave: {
      type: DataTypes.DATEONLY
    },

    // Timestamps
    createdAt: DataTypes.DATEONLY,
    updatedAt: DataTypes.DATEONLY

  }, {})
  Bank.associate = function ({ User }) {
    Bank.belongsTo(User)
  }
  return Bank
}

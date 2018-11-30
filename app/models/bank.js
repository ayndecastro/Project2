
module.exports = function (sequelize, Sequelize) {

  var Bank = sequelize.define('bank', {
    id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
    country: { type: Sequelize.STRING, notEmpty: true },
    balance: { type: Sequelize.STRING, notEmpty: true },
    datestay: { type: Sequelize.DATEONLY },
    dateleave: { type: Sequelize.DATEONLY },
    status: { type: Sequelize.ENUM('active', 'inactive'), defaultValue: 'active' }

  }, {
    // tableName: 'bank',
    // timestamps: true,
    classMethods: {
      associate : function(models) {
          Bank.belongsTo(models.user, {
            foreignKey: {
              allowNull: false
            }
          })
      },
    },
  });
  // Bank.associate = ({User}) => {
  // 	Bank.belongsTo(User)
  // }
  return Bank;

}
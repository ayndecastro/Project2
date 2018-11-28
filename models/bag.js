module.exports = (sequelize, DataTypes) => {
  const Bag = sequelize.define('Bag', {
    items: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number_of_items: {
      type: DataTypes.INTEGER
    }
  }, {});
  Bag.associate = function({ User }) {
    Bag.belongsTo(User);
  };
  return Bag;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
	firstname: { type: DataTypes.STRING,notEmpty: true},
	lastname: { type: DataTypes.STRING,notEmpty: true},
	username: {type:DataTypes.TEXT},
	about : {type:DataTypes.TEXT},
	email: { type:DataTypes.STRING, validate: {isEmail:true} },
	password : {type: DataTypes.STRING,allowNull: false }, 
	last_login: {type: DataTypes.DATE},
	status: {type: DataTypes.ENUM, values:['active','inactive'],defaultValue:'active' }
  }, {});
  User.associate = function({bank}) {
	// associations can be defined here
	User.hasMany(bank, {
		foreignKey: {
			allowNull: false
		}
	})
  };
  return User;
};
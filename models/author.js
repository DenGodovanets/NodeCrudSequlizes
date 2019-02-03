'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    name: DataTypes.STRING
  }, {});
  Author.associate = function(models) {
    Author.belongsToMany(models.Book, {
      through: 'BookAuthors',
      as: 'books',
      foreignKey: 'author'
    });
  };
  return Author;
};
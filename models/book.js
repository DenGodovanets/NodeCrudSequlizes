'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    name: DataTypes.STRING,
    year: DataTypes.INTEGER,
    shortDescription: DataTypes.STRING
  }, {});
  Book.associate = function(models) {
    Book.belongsToMany(models.Author, {
      through: 'BookAuthors',
      as: 'authors',
      foreignKey: 'book'
    });
  };
  return Book;
};
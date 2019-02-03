'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookAuthors = sequelize.define('BookAuthors', {
    book: DataTypes.INTEGER,
    author: DataTypes.INTEGER
  }, {});
  BookAuthors.associate = function(models) {
  };
  return BookAuthors;
};
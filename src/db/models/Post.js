const { Sequelize, Model, DataTypes } = require("sequelize");
const database = require("../database");

const Post = database.define("posts", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  text: DataTypes.CHAR,
  imageUrl: DataTypes.STRING,
  imagePublicId: DataTypes.STRING,
});

module.exports = Post;

const Posts = require("./posts.model")
const Users = require("./users.models")
const Categories = require("./categories.models")

const initModels = () => {
  // Relación de Posts con Users
  Posts.belongsTo(Users);
  Users.hasMany(Posts);

  // Relación de Posts con Categories
  Posts.belongsTo(Categories);
  Categories.hasMany(Posts);
};


module.exports = initModels
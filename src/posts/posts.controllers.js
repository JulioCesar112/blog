const Posts = require("../models/posts.model")
const uuid = require("uuid")
const Users = require("../models/users.models")
const Categories = require("../models/categories.models")

const getAllPosts = async (offset, limit) => {
  const posts = await Posts.findAll({
    offset: offset ? offset : 10,
    limit: limit ? limit : 5,
    include: [
      {
        model: Users,
        attributes: ['id', 'firstName', 'lastName', 'email']
      },
      {
        model: Categories,
        attributes: ['name']
      }
    ],
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'categoryId']
    }
  });
  return posts;
};

const getPostById = async (id) => {
  const post = await Posts.findOne({
    where: {
      id
    },
    include: [
      {
        model: Users,
        attributes: ['id', 'firstName', 'lastName', 'email']
      },
      {
        model: Categories,
        attributes: ['name']
      }
    ],
    attributes: {
      exclude: ['createdAt', 'updatedAt', 'categoryId']
    }
  })
  return post
}

const createPost = async (data) => {
  const newPost = await Posts.create({
    id: uuid.v4(),
    title: data.title,
    content: data.content,
    userId: data.userId,
    categoryId: data.categoryId
  })
  return newPost
}

const deletePost = async (id) => {

  const data = await Posts.destroy({
    where: {
      id
    }
  })
  return data
}

const getPostsByCategory = async (categoryId) => {
  const data = await Posts.findAll({
    where: {
      categoryId
    },
    attributes: ['id', 'title', 'content']
  })
  return data
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  deletePost,
  getPostsByCategory
}
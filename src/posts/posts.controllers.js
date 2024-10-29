const Posts = require("../models/posts.model")
const uuid = require("uuid")

const getAllPosts = async () => {
  const posts = await Posts.findAll()
  return posts
}

const getPostById = async (id) => {
  const post = await Posts.findOne({
    where: {
      id
    }
  })
  return post
}

const createPost = async (data) => {
  const id = id
  const newPost = await Posts.create({
    id: uuid.v4(),
    title: data.title,
    condent: data.content,
    createdBy: data.userId,
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

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  deletePost
}
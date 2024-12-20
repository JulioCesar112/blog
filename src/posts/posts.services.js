const postControllers = require("./posts.controllers")
const config = require('../config')


const getAllPost = async (req, res) => {
  //? localhost:900/api/v1/posts?offset=0&limit=20

  const offset = Number(req.query.offset) || 3
  const limit = Number(req.query.limit) || 5
  const urlBase = `${config.host}/api/v1/posts`


  try {
    const data = await postControllers.getAllPosts(offset, limit)
    
    const nextPage = data.count - offset >= limit ? `${urlBase}?offset=${offset + limit}&limit=${limit}` : null
    const prevPage = offset - limit >= 0 ? `${urlBase}?offset=${offset - limit}&limit=${limit}`: null
    
    return res.status(200).json({
      next: nextPage,
      prev: prevPage,
      items: data.count,
      offset,
      limit,
      results: data.rows
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "An error occurred while retrieving the post" })
  }
}

const getPostById = async (req, res) => {
  const id = req.params.id
  try {
    const newPost = await postControllers.getPostById(id)
    return res.status(200).json(newPost)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "An error occurred while retrieving the post" })
  }
}

const createPost = async (req, res) => {
  const userId = req.user.id
  const { title, content, categoryId } = req.body

  if (!title || !content || !categoryId) {
    return res.status(400).json({ message: "All fields are required" })
  }
  try {
    const newPost = await postControllers.createPost({ title, content, userId, categoryId })
    return res.status(200).json(newPost)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "An error occuren while creating the post" })
  }
}

const getPostsByCategory = async (req, res) => {
  const categoryId = req.params.id
  try {
    const postsByCategory = await postControllers.getPostsByCategory(categoryId)
    return res.status(200).json({ postsByCategory })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: 'An error occuren while getting the categories' })
  }
}


module.exports = {
  getAllPost,
  getPostById,
  createPost,
  getPostsByCategory
}
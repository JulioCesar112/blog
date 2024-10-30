const postControllers = require("./posts.controllers")

const getAllPost = async (req, res) => {
  try {
    const data = await postControllers.getAllPosts()
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "An error occurred while retrieving the post" })
  }
}

const getPostById = async (req, res) => {
  const id = req.user.id
  try {
    const newPost = await postControllers.getPostById(id)
    res.status(200).json(newPost)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "An error occurred while retrieving the post" })
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


module.exports = {
  getAllPost,
  getPostById,
  createPost,
}
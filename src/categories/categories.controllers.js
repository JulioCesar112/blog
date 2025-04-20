const Categories = require("../models/categories.models")

const getAllCategories = async () => {
  const data = await Categories.findAll()
  return data
}

const createCategory = async (data) => {
  const newCategory = await Categories.create({
    name: data.name
  })
  return newCategory
}

const getCategoryById = async (id) => {
  const data = await Categories.findOne({
    where: {
      id
    }
  })
  return data
}

const deleteCategoryById = async (id) => {
  const data = await Categories.destroy({
    where: {
      id
    }
  })
  return data
}

const updateCategory = async (id, data) => {
  const result = await Categories.update(data,{
    where:{
      id
    }
  })
  return result
}

module.exports = {
  getAllCategories,
  createCategory,
  getCategoryById,
  deleteCategoryById,
  updateCategory
}


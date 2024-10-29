const categoriesController = require("./categories.controllers");

const getAllCategories = async (req, res) => {
  try {
    const categories = await categoriesController.getAllCategories(); // Adjusted method to get all categories
    res.status(200).json(categories);
  } catch (error) {
    console.error(error); // Fixed variable name
    res.status(500).json({ message: "An error occurred while retrieving categories." });
  }
};

const getCategoryById = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await categoriesController.getCategoryById(id);
    if (data) {
      return res.status(200).json(data);
    } else {
      return res.status(404).json({ message: "Category with that ID not found." });
    }
  } catch (error) {
    console.error(error); // Fixed variable name
    res.status(500).json({ message: "An error occurred while retrieving the category." });
  }
};

const postCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "All fields are required." });
  }
  try {
    const newCategory = await categoriesController.createCategory({name}); // Awaiting category creation
    return res.status(201).json({ message: "Category registered successfully.", category: newCategory });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while creating the category." });
  }
};

const patchCategory = async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  try {
    const data = await categoriesController.updateCategory(id, { name });
    if (data[0]) {
      res.status(200).json({ message: `Category with ID ${id} updated successfully.` });
    } else {
      res.status(404).json({ message: "Category not found." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while updating the category." });
  }
};

const deleteCategory = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await categoriesController.deleteCategoryById(id);
    if (data) {
      return res.status(200).json("Your category was deleted");
    } else {
      return res.status(404).json({ message: `Category with ID ${id} not found.` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while deleting the category." });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  deleteCategory,
  postCategory,
  patchCategory,
};

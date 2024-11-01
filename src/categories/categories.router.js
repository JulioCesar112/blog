const express = require("express")
const router = express.Router()
const categoriesServices = require("./categories.services")
const getPostsByCategory = require('../posts/posts.services')

router.get("/", categoriesServices.getAllCategories)
router.post("/", categoriesServices.postCategory)
router.route("/:id")
  .get(categoriesServices.getCategoryById)
  .patch(categoriesServices.patchCategory)
  .delete(categoriesServices.deleteCategory)

router.get('/:id/posts', getPostsByCategory.getPostsByCategory)

module.exports = router
const express = require("express")
const router = express.Router()
const categoriesServices = require("./categories.services")

router.get("/", categoriesServices.getAllCategories)
router.post("/", categoriesServices.postCategory)
router.route("/:id")
  .get(categoriesServices.getCategoryById)
  .patch(categoriesServices.patchCategory)
  .delete(categoriesServices.deleteCategory)


module.exports = router
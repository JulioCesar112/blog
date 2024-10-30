const express = require("express")
const router = express.Router()
const postsServices = require("./posts.services")
//! Rutas protegidas
const passport = require("passport")
require("../middlewares/auth.middleware")(passport)

router.route("/")
  .get(postsServices.getAllPost)
  .post(passport.authenticate("jwt", { session: false }), postsServices.createPost)

router.route("/:id")
  .get(postsServices.getPostById)




module.exports = router
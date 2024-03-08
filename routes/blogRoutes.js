const express = require("express");
const {
  getAllBlogs,
  createBlog,
  updateBlog,
  getBlogbyId,
  deleteBlog,
  userBlogs,
} = require("../controller/blogController");

//router object
const router = express.Router();

//routes

//get all blogs
router.get("/allBlogs", getAllBlogs);

//create a blog
router.post("/createBlog", createBlog);

//update a blog
router.put("/updateBlog/:id", updateBlog);

//get a particular blog
router.get("/getBlog/:id", getBlogbyId);

//delete a blog
router.delete("/deleteBlog/:id", deleteBlog);


module.exports = router;

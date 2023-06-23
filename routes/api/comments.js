const express = require("express");
const router = express.Router();

const Comment = require("../../models/Comment");

// @route    GET api/comments
// @desc     Get all comments
// @access   Public.
router.get("/", async (req, res) => {
  try {
    const posts = await Comment.find();
    res.json(posts);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;

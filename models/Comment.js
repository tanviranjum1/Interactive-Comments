const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
  },
  score: {
    type: Number,
  },
  user: {
    image: {
      png: {
        type: String,
      },
      webp: {
        type: String,
      },
    },
    username: {
      type: String,
      required: true,
    },
  },
  replies: [
    {
      replyingTo: {
        type: String,
        required: true,
      },
      id: {
        type: Number,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      createdAt: {
        type: String,
      },
      score: {
        type: Number,
      },
    },
  ],
});

module.exports = Comment = mongoose.model("comments", CommentSchema);

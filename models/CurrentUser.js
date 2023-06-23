const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CurrentUserSchema = new Schema({
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
  },
});

module.exports = CurrentUser = mongoose.model("currentuser", CurrentUserSchema);

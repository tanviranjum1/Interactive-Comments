const express = require("express");

const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
connectDB();

const app = express();
// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

app.use("/api/comments", require("./routes/api/comments"));

const PORT = 7614;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

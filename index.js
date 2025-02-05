const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const { Auth } = require("./middleware/authMiddleware");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("RestFi v2 is running");
});

//middleware in router example
//app.use("/chat", Auth("user"), supportRouter);

app.use("/auth", userRoutes);

// Global 404 error handler
app.use((req, res, next) => {
  res.status(404).send("404 - Not Found");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

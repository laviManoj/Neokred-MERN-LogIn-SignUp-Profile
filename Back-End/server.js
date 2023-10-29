const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes/routes");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://traveller:Manoj123@traveller.ots9ysb.mongodb.net/mydatabase",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;

// Check the database connection
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Middleware
app.use(bodyParser.json());

// Define API routes
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

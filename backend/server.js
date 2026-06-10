const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const itemRoutes = require("./routes/itemRoutes");


const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);

app.get("/", (req, res) => {
  res.send("Lost & Found API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
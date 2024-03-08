const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//env config
dotenv.config();

//router imported
const userRoutes = require('./routes/userRoutes');
const blogsRoutes = require('./routes/blogRoutes');

//mongodb connection
connectDB();

//calling express
const app = express();

//basic middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use('/api/users', userRoutes);
app.use('/api/blogs', blogsRoutes);

const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () => {
  console.log(`server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});

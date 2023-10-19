require("dotenv/config");
require("express-async-errors");
const AppError = require("./utils/AppError");
const cookieParser = require("cookie-parser");
const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: ["http://localhost:5153", "http://127.0.0.1:5173/"],
  credentials:true
}));
app.use(routes);
app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message,
      status: "error",
    });
  }

  console.error(error);

  return response.statusCode(500).json({
    status: "error",
    message: "Internal server error",
  });
});

const Port = process.env.SERVER_PORT || 3000;
app.listen(Port, () => {
  console.log(`Server is running in Port ${Port}`);
});

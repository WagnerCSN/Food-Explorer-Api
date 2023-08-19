require("express-async-error");
const AppError = require("./utils/AppError");
const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.statusCode(400).json({
      status: "error",
      message: error.message,
    });
  }

  return response.statusCode(500).json({
    status: "error",
    message: "Internal server error",
  });
});

const Port = 3000;
app.listen(Port, () => {
  console.log(`Server is running in Port ${Port}`);
});

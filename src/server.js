require("dotenv/config");
require("express-async-errors");
const AppError = require("./utils/AppError");
const cookieParser = require("cookie-parser");
const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const uploadConfig = require("./configs/upload");

const app = express();

app.use(express.json());

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));
app.use(cookieParser());
app.use(cors({
  origin: ["https://foodexplorer-wagner.netlify.app/"],
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

const Port = 3333;
app.listen(Port, () => {
  console.log(`Server is running in Port ${Port}`);
});

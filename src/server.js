const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(routes);

const Port = 3000;
app.listen(Port, () => {
  console.log(`Server is running in Port ${Port}`);
});

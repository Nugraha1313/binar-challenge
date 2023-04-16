const express = require("express");
const app = express();
const port = 8000;

const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());

const router = require("./routes");
app.use(router);

// 404
app.use((req, res, next) => {
  return res.status(404).json({
    message: "Not Found",
  });
});

// 500
app.use((err, req, res, next) => {
  return res.status(500).json({
    message: err.message,
  });
});

//
app.listen(port, () => console.log("Port " + port + " is running"));
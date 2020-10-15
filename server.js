const express = require("express");
const app = express();

app.get("/getme", (req, res) => {
  res.send(fruits);
});

app.post("/postme", (req, res) => {
  res.send({});
});

app.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});

//Run app, then load http://localhost:5000 in a browser to see the output.

app.use((req, res, next) => {
  let error = { message: `The route ${req.url} does not exist`, code: 404 };
   next(error);
});

app.get("/fuckup/saw-it-coming", (req, res, next) => {
  try {
    fingers;
  } catch (err) {
    next(err);
  }
});

app.get("/fuckup/surprise", (req, res, next) => {
  throw new Error("this is a surprise error");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.code || 500).json({
    error: err.message,
  });
});

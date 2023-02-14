const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!!. I'm Express.JS");
});

// Import Routes
const routerv1 = require("./src/routers/RouterV1");
// const routerv2 = require("./src/routers/RouterV2");

// Group Route
app.use("/api/v1", routerv1);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

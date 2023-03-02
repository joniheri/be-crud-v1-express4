const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

// ==============================================
// Routing
// ==============================================

app.get("/", (req, res) => {
  res.send("Hello World!!. I'm Express.JS");
});

// Import Routes
const routerv1 = require("./src/routes/RouterV1");
const routerv2 = require("./src/routes/RouterV2");

// Group Route
app.use("/api/v1", routerv1);

// ==============================================
// End Routing
// ==============================================
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

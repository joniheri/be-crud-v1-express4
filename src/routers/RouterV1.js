const express = require("express");
const router = express.Router();

// TodoRouter
const { getTodos, getTodoById } = require("../controllers/versi1/Todo");

router.get("/todos", getTodos);
// router.get("/todo/:id", (req, res) => {
//   res.send({
//     response: "Success",
//     data: req.params.id,
//   });
// });
router.get("/todo/:id", getTodoById);
// En RouterTodo

module.exports = router;

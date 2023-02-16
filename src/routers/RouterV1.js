const express = require("express");
const router = express.Router();

// TodoRouter
const { getTodos, getTodoById } = require("../controllers/versi1/Todo");

router.get("/dummydatas", getTodos);
router.get("/dummydata/:id", getTodoById);
// En RouterTodo

module.exports = router;

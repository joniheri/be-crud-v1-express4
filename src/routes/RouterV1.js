const express = require("express");
const router = express.Router();

// Import TodoController
const {
  getTodos,
  getTodoById,
} = require("../controllers/versi1/TodoController");

// Import UserController
const { getUsers } = require("../controllers/versi1/UserController");

// Router Todo
router.get("/dummydatas", getTodos);
router.get("/dummydata/:id", getTodoById);

// Router User
router.get("/users", getUsers);

module.exports = router;

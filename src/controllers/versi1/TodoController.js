// Data TodoDummy
let todoList = [
  {
    id: 1001,
    title: "Belajar Node JS",
    isDone: false,
  },
  {
    id: 1002,
    title: "Belajar Express",
    isDone: false,
  },
  {
    id: 1003,
    title: "Belajar React JS",
    isDone: false,
  },
];

// GetDataTodos
exports.getTodos = (req, res) => {
  return res.send({
    response: "Success",
    message: "Get Data Todos Success",
    data: todoList,
  });
};

// GetDataTodoListById
exports.getTodoById = (req, res) => {
  const idParam = req.params.id;
  const dataTodoById = todoList.find((todo) => todo.id == idParam);

  if (!dataTodoById) {
    return res.status(400).send({
      response: "Fail",
      message: `Data with ID ${idParam} Not Found!`,
      data: null,
    });
  }

  return res.send({
    response: "Success",
    message: "Get Data Todo By ID Success",
    idParam: idParam,
    data: dataTodoById,
  });
};

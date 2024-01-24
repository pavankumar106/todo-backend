const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});

    if (todos.length === 0) {
      return res.status(200).json({
        success: true,
        message: "no data for todo's",
      });
    }

    return res.status(200).json({
      success: true,
      data: todos,
      message: "todo's fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal server error",
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const id = req.params.id;

    const todo = await Todo.findById({ _id: id });
    
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "no data found for given id",
      });
    }
    return res.status(200).json({
      success: true,
      data: todo,
      message: "data fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal server error",
    });
  }
};

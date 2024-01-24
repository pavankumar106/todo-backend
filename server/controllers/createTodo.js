const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "All fields are mandatory",
      });
    }
    const todo = await Todo.create({ title, description });
    return res.status(200).json({
      success: true,
      data: todo,
      message: "Entry created ",
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

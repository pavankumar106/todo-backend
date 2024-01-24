const Todo = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;

    await Todo.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      message: "todo deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

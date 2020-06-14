const Todo = require("../../models/todo.model");

module.exports = async (_id) => {
  try {
    await Todo.deleteOne({ _id });
    return true;
  } catch (err) {
    return false;
  }
};

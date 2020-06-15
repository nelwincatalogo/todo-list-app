const Todo = require("../../models/todo.model");

module.exports = async () => {
  try {
    await Todo.deleteMany({});
    return true;
  } catch (err) {
    return false;
  }
};

const Todo = require("../../models/todo.model");

module.exports = async () => {
  try {
    const result = await Todo.find();
    return result;
  } catch (err) {
    return [];
  }
};

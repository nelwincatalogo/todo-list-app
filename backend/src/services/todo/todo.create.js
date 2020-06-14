const Todo = require("../../models/todo.model");

module.exports = async (dataObj) => {
  try {
    await Todo.insertMany(dataObj);
    return true;
  } catch (err) {
    return false;
  }
};

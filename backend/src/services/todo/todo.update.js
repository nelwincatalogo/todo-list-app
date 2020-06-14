const Todo = require("../../models/todo.model");

module.exports = async (_id, set) => {
  try {
    // await Todo.update({ _id }, { $set: set }); (deprecated)
    await Todo.updateOne({ _id }, { $set: set });
    return true;
  } catch (err) {
    return false;
  }
};

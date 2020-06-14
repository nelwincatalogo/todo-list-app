const express = require("express");
const router = express.Router();

const CreateService = require("../services/todo/todo.create");
const RetrieveService = require("../services/todo/todo.retrieve");
const UpdateService = require("../services/todo/todo.update");
const DeleteService = require("../services/todo/todo.delete");

router.post("/create", async (req, res) => {
  const dataObj = req.body;

  const result = await CreateService(dataObj);

  if (result) {
    res.status(200).send({
      status: result,
      message: "Successfully Created!",
    });
  } else {
    res.status(500).send({
      status: result,
      message: "Failed to Create!",
    });
  }
});

router.get("/retrieve", async (req, res) => {
  const result = await RetrieveService();

  if (result) {
    res.status(200).send(result);
  } else {
    res.status(500).send({
      status: result,
      message: "Failed to Retrieve!",
    });
  }
});

router.post("/update", async (req, res) => {
  const { _id, set } = req.body;

  const result = await UpdateService(_id, set);

  if (result) {
    res.status(200).send({
      status: result,
      message: "Successfully Updated!",
    });
  } else {
    res.status(500).send({
      status: result,
      message: "Failed to Update!",
    });
  }
});

router.post("/delete", async (req, res) => {
  const { _id } = req.body;

  const result = await DeleteService(_id);

  if (result) {
    res.status(200).send({
      status: result,
      message: "Successfully Deleted!",
    });
  } else {
    res.status(500).send({
      status: result,
      message: "Failed to Delete!",
    });
  }
});

module.exports = router;

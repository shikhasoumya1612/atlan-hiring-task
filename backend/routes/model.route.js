const express = require("express");
const models = require("../data/data");

const router = express.Router();

const responseModels = models;

// Fetch all llm models
router.get("/all", async (req, res) => {
  res.send({ status: "Successful", models: responseModels });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  let search_model = null;

  for (let i = 0; i < responseModels.length; i++) {
    if (responseModels[i].id == id) {
      search_model = responseModels[i];
      break;
    }
  }

  if (search_model) {
    res.send({ status: "Successful", model: search_model });
  } else {
    res.status(404).send({ status: "Failed", message: "Model not found" });
  }
});

router.patch("/add", async (req, res) => {
  const newModel = {
    ...req.body,
    id: responseModels.length + 1,
  };

  responseModels.push(newModel);

  res.send({
    status: "Successful",
    message: "Model added successfully",
    newModel,
  });
});

module.exports = router;

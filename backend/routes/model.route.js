const express = require("express");
const models = require("../data/data");

const router = express.Router();

// Fetch all llm models
router.get("/all", async (req, res) => {
  res.send({ status: "Successful", models });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  let search_model = null;

  for (let i = 0; i < models.length; i++) {
    if (models[i].id == id) {
      search_model = models[i];
      break;
    }
  }

  if (search_model) {
    res.send({ status: "Successfull", model: search_model });
  } else {
    res.status(404).send({ status: "Failed", message: "Model not found" });
  }
});

module.exports = router;

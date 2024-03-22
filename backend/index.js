require("dotenv").config({ path: ".env" });
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/api/v1/home", async (req, res) => {
  res.send("Welcome to LLM explore");
});

const modelRouter = require("./routes/model.route");
app.use("/api/v1/model", modelRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started on ${process.env.PORT}`);
});

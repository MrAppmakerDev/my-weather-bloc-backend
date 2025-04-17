import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send({ status: 200, message: "Welcome to my node server!" });
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});

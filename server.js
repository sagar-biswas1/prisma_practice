import express from "express";

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/health", (req, res) => {
  res.send("app is up.");
});
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});

import express from "express";
import 'dotenv/config'
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json())
import routes from './routes/index'
app.use(routes)
app.get("/health", (req, res) => {
  res.send("app is up.");
});
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});

import express from "express";
const app = express();
import todosRouter from "./routes/todos.js";
 
const port = 4000;
app.use(express.json());
app.use("/api", todosRouter);
 
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
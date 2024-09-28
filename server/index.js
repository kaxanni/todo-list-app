import express from "express";
 
const app = express();
 
// define the port
const port = 3000;
 
app.get("/", (req, res) => {
  res.send("Hello Todo App!!!");
});
 
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
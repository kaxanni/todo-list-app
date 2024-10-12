import express from "express";
const app = express();
const todosRouter = express.Router();
 
// reading all todo items
todosRouter.get('/todos', (req, res) => {
  res.send("Get All TODOS");
});
// getting specific todo item with id as parameter
todosRouter.get('/todos/:id', (req, res) => {
  // get the todo id from the url
  const todoId = req.params.id;
 
  res.send(`Getting todo with id ${todoId}`);
});
 
todosRouter.post('/todos', (req, res) => {
    // Send the required object response
    res.json({
        id:1,
        title: "Todo",
        description: "My todo"
    });
});
 
// updating a todo item
todosRouter.put('/todos/:id', (req, res) => {
  // get the todo id from the url
  const todoId = req.params.id;
  const data = req.body;
  res.send(`Updating TODO with id ${todoId}`);
 
});

// deleting a todo item
todosRouter.delete('/todos/:id', (req, res) => {
  // get the todo id from the url
  const todoId = req.params.id;
 
  res.send(`Deleting todo with id ${todoId}`);
});
export default todosRouter;
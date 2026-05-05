const express = require('express');
const Todo = require("../model/Todo");
const router = express.Router();

router.get('/', async (req,res) => {
   let todos = await Todo.find();
   res.json(todos);
});

router.get("/:id", async (req,res) =>{
    let id = req.params.id;
    let todo = await Todo.findById(id);
    res.status(200).json(todo);
});

router.post('/', async (req,res) => {
    const todo = req.body;
    console.log("Request body : ", req.body);
    let newTodo = new Todo(todo);
    newTodo = await newTodo.save();
    res.status(201).json(newTodo);
});

router.put("/:id", async (req,res) =>{
    let id = req.params.id;
    let todo = req.body;
    let updated = await Todo.findByIdAndUpdate(id,todo,{new:true});
    res.json(updated);
});

router.delete("/:id", async (req,res) => {
    let id = req.params.id;
    let deletedTodo = await Todo.findByIdAndDelete(id);
    res.json(deletedTodo);
});
module.exports = router;
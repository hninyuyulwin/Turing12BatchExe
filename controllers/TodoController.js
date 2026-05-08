const TodoService = require("../services/TodoService");

async function getAllTodos(req,res){
    let todos = await TodoService.getAllTodo();
    res.status(200).json(todos);
}

async function getTodoById(req,res){
    let id = req.params.id;
    try {
        let todo = await TodoService.getById(id);
        console.log("Todo controller getbyid : "+todo);
        
        res.json(todo);
    } catch (error) {
        res.status(404).json({
            message : error.message
        });
    } 
}

async function createTodo(req, res){
    let todo = req.body;
    try {
        let newTodo = await TodoService.createTodo(todo);
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({
            message : error.message
        });
    }
}

async function updateTodo(req,res){
    let id = req.params.id;
    let todo = req.body;
    try {
        let updatedTodo = await TodoService.updateTodo(id,todo);
        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json({
            message : error.message
        });
    }
}

async function deleteTodo(req,res){
    let id = req.params.id;
    try {
        let todo = await TodoService.deleteTodo(id);
        res.json(todo);
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
}

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
}
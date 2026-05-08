const Todo = require("../model/Todo");

async function getAllTodo(){
    const todos = await Todo.find();
    return todos;
}

async function getById(id){
    let todo = await Todo.findById(id);
    console.log("Todo service getbyid ",todo);
    return todo;
}

async function createTodo(todo){
    let newTodo = new Todo(todo);
    let createTodo = await newTodo.save();
    return createTodo;
}

async function updateTodo(id,todo){
    let updatedTodo = await Todo.findByIdAndUpdate(id,todo,{new : true});
    return updatedTodo;
}

async function deleteTodo(id){
    let todo = await Todo.findByIdAndDelete(id);
    return todo;
}

module.exports={
    getAllTodo,
    getById,
    createTodo,
    updateTodo,
    deleteTodo
}
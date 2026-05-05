const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
    title : String,
    completed : Boolean
});

// export default TodoSchema;
const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;

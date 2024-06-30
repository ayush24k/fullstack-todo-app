const mongoose = require('mongoose');
const env = require('dotenv');
env.config();

mongoose.connect(process.env.DB_link);

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {todo};
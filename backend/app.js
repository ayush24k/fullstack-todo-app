const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db/todoDB");
const app = express();
const cors = require('cors');

const PORT = 3001;

app.use(express.json());

app.use(cors());

// creating a todo
app.post('/todo', async (req, res) => {
    const todoPayLoad = req.body;
    const parsedPayload = createTodo.safeParse(todoPayLoad);

    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the Worng Inputs"
        })
        return;
    }

    await todo.create({
        title: todoPayLoad.title,
        description: todoPayLoad.description,
        completed: false,
    })

    res.json({
        msg: "todo Created"
    })
});

// showing all the todos
app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    res.json({
        todos
    });
});

// marking todos as complete
app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong Inputs"
        })
        return;
    }

    const update = todo.updateOne({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        msg: "Todo marked as complete!"
    })
})


app.listen(PORT, ()=> {
    console.log(`Server runnig on Port: ${PORT}`);
})
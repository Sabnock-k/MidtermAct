const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json("Express is working! Rafael B. Patiño")
});

app.listen(port, () => {
    console.log("This express server listens to PORT 3000");
})

let tasks = [];
let currentId = 1;

app.use(express.json());

app.post('/post', (req, res) => {
    const { name, description } = req.body;
    const newTask = { id: currentId++, name, description };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.get('/read', (req, res) => {
    res.json(tasks);
});

app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const task = tasks.find(t => t.id == id);
    if (task) {
        task.name = name;
        task.description = description;
        res.json(task);
    } else {
        res.status(404).send('Task not found');
    }
});

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const taskIndex = tasks.findIndex(t => t.id == id);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Task not found');
    }
});
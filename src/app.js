const express = require('express');
const app = express();

const Task = require('./model/task');

// settings
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.render('index', {tasks });
})

// Create Task
app.post('/create', async (req, res) => {
    const newTask = new Task({
        task: req.body.task,
        description: req.body.description
    });
    await newTask.save();
    res.redirect('/');
    
})
// deleting items
app.get('/delete/:id', async (req, res, next) => {
  let { id } = req.params;
  await Task.remove({_id: id});
  res.redirect('/');
});

// STATIC Files
app.use(express.static(__dirname + '/public'));

module.exports = app;
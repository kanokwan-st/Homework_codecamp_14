const db = require('../models');

const getTodoList = async (req, res) => {
    const todoList = await db.TodoList.findAll({ where:{user_id: req.user.id} });
    res.status(200).send(todoList);
};

const addTodoList = async (req, res) => {
    const newTodo = await db.TodoList.create({
        task: req.body.task,
        user_id: req.user.id
    });

    res.status(201).send(newTodo);
};

const deleteTodoList = async (req, res) => {
    const targetId = Number(req.params.id);
    const targetTodo = await db.TodoList.findOne({ where: { id: targetId, user_id: req.user.id }}); //ต้องเป็นของ user_id นั้นถึงจะลบได้
    if(targetTodo) {
        await targetTodo.destroy();
    } else {
        res.status(404).send({ message: "Todo list not found."})
    }
    res.status(204).send();
};

const updateTodoList = async (req, res) => {
    const targetId = Number(req.params.id);
    const newTask = req.body.task;
    const targetTodo = await db.TodoList.findOne({ where: { id: targetId, user_id: req.user.id }}); //ต้องเป็นของ user_id นั้นถึงจะลบได้
    if (targetTodo) {
        await targetTodo.update({
            task: newTask
        });
        res.status(200).send({ message: "updating is success"});
    } else {
        res.status(404).send({ message: "Todo list not found" });
    }
};

module.exports = {
    getTodoList,
    addTodoList,
    deleteTodoList,
    updateTodoList
};
const { sequelize, Sequelize } = require('../models');

const Op = Sequelize.Op

const getAllManagers = async (req, res) => {
    const allManagers = await db.Manager.findAll();
    req.status(200).send(allManagers);
};

const getAllManagerById = async (req, res) => {
    const targetId = req.params.id;
    const targetManager = await db.Manager.findOne({ where: { id: targetId } });
    res.status(200).send(targetManager);
}

const createManager = async (req, res) => {
    const { name, experience } = req.body;
    const newManager = await db.Manager.create({
        name: name,
        experience: experience
    });
    res.status(201).send(newManager);
};

const updateManager = async (req, res) => {
    const targetId = req.params.id;
    const { name, experience } = req.body;
    await db.Manager.update({
        name: name,
        experience: experience
    }, {
        where: { id: targetId }
    });
    
    res.status(200).send({Message: `Manager ID: ${targetId} has been updated.`})
};

const deleteManager = async (req, res) => {
    const targetId = req.params.id;
    await db.Manager.destroy({
        where: { id: targetId }
    });
    
    res.status(204).send()
};

module.exports = {
    getAllManagers,
    getAllManagerById,
    createManager,
    updateManager,
    deleteManager
};
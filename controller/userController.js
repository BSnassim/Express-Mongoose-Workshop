const User = require("../models/user");

async function getAll(req, res, next) {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(error);
    }
};

async function addUser(req, res, next) {
    try {
        await new User({
            name: req.body.name,
            email: req.body.email,
            cin: req.body.cin
        }).save();
        res.status(200).send("User added succesfuly");
    } catch (error) {
        res.status(400).send(error);
    }
};

async function getById(req, res, next) {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

async function deleteByCin(req, res, next) {
    try {
        await User.findOneAndDelete({ cin: req.params.cin });
        res.status(200).send("User deleted succesfuly");
    } catch (error) {
        res.status(400).send(error);
    }
};

async function updateById(req, res, next) {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};
module.exports = { getAll, addUser, getById, deleteByCin, updateById };
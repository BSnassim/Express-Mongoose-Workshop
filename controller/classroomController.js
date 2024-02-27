const Classroom = require("../models/classroom");

async function getAll(req, res, next) {
    try {
        const classrooms = await Classroom.find();
        res.status(200).send(classrooms);
    } catch (error) {
        res.status(400).send(error);
    }
};

async function addClassroom(req, res, next) {
    try {
        await new Classroom({
            class : req.body.class,
            capacity : req.body.capacity,
        }).save();
        res.status(200).send("Classroom added succesfuly");
    } catch (error) {
        res.status(400).send(error);
    }
};

async function getById(req, res, next) {
    try {
        const classroom = await Classroom.findById(req.params.id);
        res.status(200).send(classroom);
    } catch (error) {
        res.status(400).send(error);
    }
};

async function deleteByClass(req, res, next) {
    try {
        await Classroom.findOneAndDelete({ class: req.params.class });
        res.status(200).send("Classroom deleted succesfuly");
    } catch (error) {
        res.status(400).send(error);
    }
};

async function deleteById(req, res, next) {
    try {
        await Classroom.findByIdAndDelete(req.params.id);
        res.status(200).send("Classroom deleted succesfuly");
    } catch (error) {
        res.status(400).send(error);
    }
};

async function updateById(req, res, next) {
    try {
        const classroom = await Classroom.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send(classroom);
    } catch (error) {
        res.status(400).send(error);
    }
};
module.exports = { getAll, addClassroom, getById, deleteByClass, deleteById, updateById };
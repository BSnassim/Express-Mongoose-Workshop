const express = require("express");
const router = express.Router();
const classroomController = require("../controller/classroomController");
const validator = require("../middleware/validate");

router.post('/add', classroomController.addClassroom);

router.get('/get/:id', classroomController.getById);

router.get('/getAll', classroomController.getAll);

router.delete('/deleteClass/:class', classroomController.deleteByClass);

router.delete('/deleteById/:id', classroomController.deleteById);

router.put('/update/:id', classroomController.updateById);

module.exports = router;
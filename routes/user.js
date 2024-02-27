const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const validator = require("../middleware/validate");

router.get('/chat', (req, res) => {
    res.render('chat');
});

router.post('/add', validator, userController.addUser);

router.get('/get/:id', userController.getById);

router.get('/getAll', userController.getAll);

router.delete('/delete/:cin', userController.deleteByCin);

router.put('/update/:id', userController.updateById);

module.exports = router;
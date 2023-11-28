const express = require('express');
const router = express.Router();
const {getAllTasks,createTask,deleteTask,getSingleTask,updateTask} = require('../controller/tasks');

router.route('/').get(getAllTasks);
router.route('/').post(createTask);
router.route('/:id').get(getSingleTask);
router.route('/:id').delete(deleteTask);
router.route('/:id').patch(updateTask);

module.exports = router;
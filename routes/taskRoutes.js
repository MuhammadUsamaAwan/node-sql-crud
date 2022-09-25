const express = require('express')
const router = express.Router()
const {
  getAllTasks,
  getTask,
  createNewTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController')

router
  .route('/')
  .get(getAllTasks)
  .post(createNewTask)
  .patch(updateTask)
  .delete(deleteTask)

router.get('/:id', getTask)

module.exports = router

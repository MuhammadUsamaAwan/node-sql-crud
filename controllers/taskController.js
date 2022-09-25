const db = require('../config/db')

// @desc    Get all tasks
// @route   GET /tasks
// @access  Public
const getAllTasks = (req, res) => {
  const q = 'SELECT * from tasks'
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err)
    return res.status(200).json(data)
  })
}

// @desc    Get a task
// @route   GET /tasks/:id
// @access  Public
const getTask = (req, res) => {
  const { id } = req.params
  const q = `SELECT * from tasks WHERE id=${id}`
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err)
    return res.status(200).json(data)
  })
}

// @desc    Create a task
// @route   POST /tasks
// @access  Public
const createNewTask = (req, res) => {
  const { task } = req.body
  if (!task) return res.status(400).json({ message: 'Please enter task' })
  const q = `INSERT INTO tasks (task) VALUES('${task}');`
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err)
    return res.status(200).json({ message: 'Task entered' })
  })
}

// @desc    Updates a task
// @route   PATCH /tasks
// @access  Private
const updateTask = (req, res) => {
  const { task, id } = req.body
  if (!task || !id)
    return res.status(400).json({ message: 'Please enter task & id' })
  const q = `UPDATE tasks SET task='${task}' WHERE id=${id}`
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err)
    return res.status(200).json({ message: 'Task updated' })
  })
}

// @desc    Deletes a task
// @route   DELETE /tasks
// @access  Private
const deleteTask = (req, res) => {
  const { id } = req.body
  if (!id) return res.status(400).json({ message: 'Please enter id' })
  const q = `DELETE FROM tasks WHERE id=${id}`
  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err)
    return res.status(200).json({ message: 'Task deleted' })
  })
}

module.exports = {
  getAllTasks,
  getTask,
  createNewTask,
  updateTask,
  deleteTask,
}

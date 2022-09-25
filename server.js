require('dotenv').config()
require('express-async-errors')
const express = require('express')
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.use('/tasks', require('./routes/taskRoutes'))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

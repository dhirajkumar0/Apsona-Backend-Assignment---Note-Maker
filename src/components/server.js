const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const noteRoutes = require('./routes/notes')

const app = express()

// Middleware
app.use(bodyParser.json())

// MongoDB connection
mongoose
  .connect('mongodb://localhost:27017/notes-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message)
  })

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/notes', noteRoutes)

// Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

const express = require('express')
const Note = require('../models/Note')
const auth = require('../middleware/auth')

const router = express.Router()

// Middleware to check auth
router.use(auth)

// Create a new note
router.post('/', async (req, res) => {
  try {
    const {title, content, tags, color} = req.body
    const newNote = new Note({
      userId: req.user.id,
      title,
      content,
      tags,
      color,
    })
    await newNote.save()
    res.status(201).json(newNote)
  } catch (error) {
    res.status(500).json({message: 'Error creating note', error})
  }
})

// Get all notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find({
      userId: req.user.id,
      isArchived: false,
      isTrashed: false,
    })
    res.json(notes)
  } catch (error) {
    res.status(500).json({message: 'Error fetching notes', error})
  }
})

// Search notes
router.get('/search', async (req, res) => {
  try {
    const {query} = req.query
    const notes = await Note.find({
      userId: req.user.id,
      $text: {$search: query},
      isArchived: false,
      isTrashed: false,
    })
    res.json(notes)
  } catch (error) {
    res.status(500).json({message: 'Error searching notes', error})
  }
})

// Archive a note
router.put('/:id/archive', async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      {isArchived: true},
      {new: true},
    )
    res.json(note)
  } catch (error) {
    res.status(500).json({message: 'Error archiving note', error})
  }
})

// Trash a note
router.put('/:id/trash', async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      {isTrashed: true},
      {new: true},
    )
    res.json(note)
  } catch (error) {
    res.status(500).json({message: 'Error trashing note', error})
  }
})

// Get all trashed notes (deleted in the last 30 days)
router.get('/trash', async (req, res) => {
  try {
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
    const notes = await Note.find({
      userId: req.user.id,
      isTrashed: true,
      updatedAt: {$gte: thirtyDaysAgo},
    })
    res.json(notes)
  } catch (error) {
    res.status(500).json({message: 'Error fetching trashed notes', error})
  }
})

module.exports = router

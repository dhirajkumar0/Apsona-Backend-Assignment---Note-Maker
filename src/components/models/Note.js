const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    validate: [arrayLimit, '{PATH} exceeds the limit of 9'],
  },
  color: {
    type: String,
    default: '#ffffff',
  },
  isArchived: {
    type: Boolean,
    default: false,
  },
  isTrashed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

function arrayLimit(val) {
  return val.length <= 9
}

NoteSchema.index({title: 'text', content: 'text', tags: 'text'})

module.exports = mongoose.model('Note', NoteSchema)

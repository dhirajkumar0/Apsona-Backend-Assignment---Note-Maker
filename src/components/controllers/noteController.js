const Note = require('../models/Note');

exports.createNote = async (req, res) => {
  try {
    const { title, content, tags, color } = req.body;
    const newNote = new Note({
      userId: req.user.userId,
      title,
      content,
      tags,
      color
    });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ message: 'Error creating note', error });
  }
};

exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.userId, isArchived: false, isTrashed: false });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notes', error });
  }
};

exports.searchNotes = async (req, res) => {
  try {
    const { query } = req.query;
    const notes = await Note.find({
      userId: req.user.userId,
      $text: { $search: query },
      isArchived: false,
      isTrashed: false
    });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Error searching notes', error });
  }
};

exports.archiveNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { isArchived: true },
      { new: true }
    );
    res.json(note);
  } catch (error) {
    res.status(500).json({ message: 'Error archiving note', error });
  }
};

exports.trashNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      { isTrashed: true },
      { new: true }
    );
    res.json(note);
  } catch (error) {
    res.status{500).json({ message: 'Error trashing note', error });
  }
};

exports.getTrashedNotes = async (req, res) => {
  try {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const notes = await Note.find({
      userId: req.user.userId,
      isTrashed: true,
      updatedAt: { $gte: thirtyDaysAgo }
    });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trashed notes', error });
  }
};

const express = require('express');
const { getAllNotes, createNote, updateNote, deleteNote, getNoteById, } = require('../controllers/notesControllers');

const routerNote = express.Router();


routerNote.get('/', getAllNotes);
routerNote.get('/:id', getNoteById);
routerNote.post('/', createNote);
routerNote.put('/:id', updateNote);
routerNote.delete('/:id', deleteNote);

module.exports= routerNote;
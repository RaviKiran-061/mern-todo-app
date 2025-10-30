

const Note = require('../models/Note')

const getAllNotes = async (_, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 }); // sort newest first
        res.status(200).json(notes);
    } catch (error) {
        console.error('Error in getAllNotes controller', error);
        res.status(201).json({ message: 'Internal server error.'});
    }
}

const getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        console.log('getNoteById',req.params.id);
        
        if(!note) return res.status(404).json({ message: 'Note not found.'});

        res.status(200).json(note);
    } catch (error) {
        console.error('Error in getNoteById controller.', error);
        res.status(500).json({ message: 'Internal server error.'});
    }
}

const createNote = async (req, res) => {
   try{
        const { title, content } = req.body;
        const newNote = new Note({ title, content });

        await newNote.save();
        res.status(201).json({message: 'Note created successfully.'});
   } catch(error){
        console.error('Error in createNote controller.', error);
        res.status(500).json({ message: 'Internal server error' });
   }
}

const updateNote = async (req, res) => {
    try{
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id, 
            { title, content }, 
            { new: true }
        );

        if(!updatedNote) return res.status(404).json({ message: "Note not found."});

        res.status(200).json({ message: 'Note updated successfully.', updatedNote})
    } catch(error) {
        console.error('Error in updateNote Controller', error);
        res.status(500).json({ message: 'Internal server error.'})
    }
}

const deleteNote = async (req, res) => {
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id);

        if(!deletedNote) return res.status(404).json({ message: 'Note not found.'});

        res.status(200).json({ message: 'Note deleted successfully.'});
    } catch(error){
        console.error('Error in deleteNote Controller', error);
        res.status(500).json({ message: 'Internal server error.'})
    }
}

module.exports = { getAllNotes, createNote, updateNote, deleteNote, getNoteById }
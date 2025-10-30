 const { Schema, model } = require('mongoose')


 const noteSchema = new Schema({
    title: { 
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
 }, { timestamps: true });


 const Note = model("Note", noteSchema);

 module.exports = Note;
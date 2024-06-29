import { NoteModel } from "../models/note_model.js"

// Add notes
export const addNote = async (req, res) => {
    const supplyNote = await NoteModel.create(req.body);
    res.status(200).send(supplyNote)
}

// Get all notes
export const getNotes = async (req, res, next) => {
    try {
        const allNotes = await NoteModel.find()
        res.status(200).send(allNotes)
    } catch (error) {
        next(error)
    }
}

// Get one note
export const getOneNote = async (req, res) => {
    const oneNote = await NoteModel.findById(req.params.id)
    res.status(200).send(oneNote)
}

// update one note
export const updateNote = async (req, res) => {
    const chosenTitle = req.body.title;
    const chosenMessage = req.body.message;
    const patchNote = await NoteModel.findByIdAndUpdate(req.params.id, { title: chosenTitle, message: chosenMessage });
    res.status(200).send(patchNote)
}

// delete one note
export const deleteNote = async (req, res) => {
    const deleteNoteById = await NoteModel.findByIdAndDelete(req.params.id);
    res.status(200).send(`Note with id ${req.params.id} deleted`);
}
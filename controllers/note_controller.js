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
        res.json(allNotes)
    } catch (error) {
        next(error)
    }
}

// Get one note
export const getOneNote = async (req, res) => {
    const oneNote = await NoteModel.findById(req.params.id)
    res.json(oneNote)
}

// update one note
export const updateNote = async (req, res) => {
    const chosenTitle = req.body.title;
    const patchNote = await NoteModel.findByIdAndUpdate(req.params.id, { title: chosenTitle });
    res.json(patchNote)
}

// delete one note
export const deleteNote = async (req, res) => {
    const deleteNoteById = await NoteModel.findByIdAndDelete(req.params.id);
    res.json(`Note with id ${req.params.id} deleted`);
}
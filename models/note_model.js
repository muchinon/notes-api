import { Schema, model } from "mongoose";

const noteSchema = new Schema({
    title: { type: String },
    message: { type: String }
}, {
    timestamps: true
})

export const NoteModel = model('note', noteSchema);
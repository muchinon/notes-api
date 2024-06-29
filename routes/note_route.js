import { Router } from "express";
import { addNote, deleteNote, getNotes, getOneNote, updateNote } from "../controllers/note_controller.js";

const noteRouter = Router();

noteRouter.post('/notes', addNote)

noteRouter.get('/notes', getNotes)

noteRouter.get('/notes/:id', getOneNote)

noteRouter.patch('/notes/:id', updateNote)

noteRouter.delete('/notes/:id', deleteNote)


export default noteRouter;
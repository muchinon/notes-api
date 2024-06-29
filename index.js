import express from "express";
import 'dotenv/config'
import { dbConnection } from "./config/db.js";
import noteRouter from "./routes/note_route.js";

const app = express();

dbConnection();

app.use(express.json());

app.use(noteRouter);

app.listen(5431, () => {
    console.log("Notes api is working");
});


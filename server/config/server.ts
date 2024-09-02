import express from "express";
//@ts-ignore
import cors from "cors"

import Settings from "../settings/index.js";
import { BookController } from "../domains/book/adapters/driver/book-driver.adapter.js";

const PORT = Settings.port || 5000;
const app = express();
const router = express.Router()
//@ts-ignore
app.use(cors());
//@ts-ignore
app.use(express.json());

BookController(app, router)
//@ts-ignore
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
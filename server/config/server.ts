import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import Settings from "../settings/index";
import { BookController } from "../domains/book/adapters/driver/book-driver.adapter";

dotenv.config({ path: "../.env" });
const PORT = Settings.port || 5000;
const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

BookController(app, router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

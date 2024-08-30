import express from "express";
import cors from "cors"
import books from "./routes/books.js";


const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/books", books);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
import express from "express";

import database from "../../../../config/database.js";

import { ObjectId } from "mongodb";
import { BookEntity } from "../../core/entities/book.entity.js";
import { BookReaderDrivenPorts } from "../../ports/driven/book-reader-driven.ports.js";
import { BookResourcePathConstants } from "../../core/constants/book-resource-path.constants.js";
import { BookDatabase } from "../../core/constants/book-database.constants.js";


const router = express.Router();

export function BookReaderAdapter(): BookReaderDrivenPorts{
    async function getAll(): Promise<BookEntity[]> {

        return router.get(BookResourcePathConstants.ROOT, async (req, res) => {
            try {
                let collection = await database.collection(BookDatabase);
                let results = await collection.find({}).toArray();
                res.status(200).json(results);
            } catch (err) {
                console.error("Error fetching books", err);
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
        
    }

    async function getById(id: string) : Promise<BookEntity> {
       return router.get(BookResourcePathConstants.PARAM_ID, async (req, res) => {
            try {
                let collection = await database.collection(BookDatabase);
                let query = { _id: new ObjectId(id) };
                let result = await collection.findOne(query);
        
                if (!result) {
                    return res.status(404).send("Not Found");
                } else {
                    return res.status(200).json(result);
                }
            } catch (err) {
                console.error(err);
                return res.status(500).send("Server Error");
            }
        }); 
    }

    return {
        getAll,
        getById
    }
}




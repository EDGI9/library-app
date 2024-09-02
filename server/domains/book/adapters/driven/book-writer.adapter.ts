import express from "express";

import database from "../../../../config/database.js";

import { ObjectId } from "mongodb";
import { BookEntity } from "../../core/entities/book.entity.js";
import { BookWriterDrivenPorts } from "../../ports/driven/book-writer-driven.ports.js";
import { BookResourcePathConstants } from "../../core/constants/book-resource-path.constants.js";
import { BookDatabase } from "../../core/constants/book-database.constants.js";


const router = express.Router();

export function BookWritterAdapter(): BookWriterDrivenPorts {

    async function create(book: BookEntity) {
        return router.post(BookResourcePathConstants.ROOT, async (req, res) => {
            try {
                let collection = await database.collection(BookDatabase);
                let result = await collection.insertOne(book);

                res.send(result).status(204);
            } catch(err){
                console.error(err);
                res.send("Error adding record").status(500);
            }
        });
    }

    async function update(id: string, book: BookEntity) {
        return router.patch(BookResourcePathConstants.PARAM_ID, async (req, res) => {
            try {
                let query = {_id: new ObjectId(id) };
                const updates = {
                    $set: book
                }
        
                let collection = database.collection(BookDatabase);
                let result = collection.updateOne(query, updates);

                res.send(result).status(200);
            } catch (error) {
                console.error(error);
                req.send("Error updating record").status(500);
            }
        });
    }

    async function remove(id: string) {
        return router.delete(BookResourcePathConstants.PARAM_ID, async (req, res) => {
            try {
                let query = {_id: new ObjectId(id) }
                const collection = database.collection(BookDatabase);
                const result = collection.deleteOne(query);
        
                res.send(result).status(200)
            } catch (error) {
                console.error(error);
                res.send("Error deleting record").status(500);
            }
        
        })
    }

    return {
        create,
        update,
        remove
    }
}








// export default router;
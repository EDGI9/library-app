import express from "express";

import database from "../../../../config/database.js";

import { ObjectId } from "mongodb";
import { BookEntity } from "../../core/entities/book.entity.js";
import { BookReaderDrivenPorts } from "../../ports/driven/book-reader-driven.ports.js";
import { BookResourcePathConstants } from "../../core/constants/book-resource-path.constants.js";
import { BookDatabase } from "../../core/constants/book-database.constants.js";

export function BookReaderAdapter(): BookReaderDrivenPorts{
    async function getAll(): Promise<BookEntity[]> {

        try {
            let collection = await database.collection(BookDatabase);
            let results = await collection.find({}).toArray();

            const entries: BookEntity[] = results.map((doc) => {
                return {
                  ...doc,
                  id: doc._id.toString(),
                  name: doc.name.toString(),
                  description: doc.description.toString(),
                  genre:doc.genre,
                  image: doc.image.toString(),
                }
            })
            
            return entries
        } catch (err) {
            console.error("Error fetching books", err);
            return [];
        }
    }

    async function getById(id: string) : Promise<BookEntity | null> {
        try {
            if (!id) {
                throw new Error("No Id provided");
            }

            let collection = await database.collection(BookDatabase);
            let query = { _id: new ObjectId(id) };
            
            let result = await collection.findOne(query);

            if (!result) {
                return null;
            } else {
                return result
            }
        } catch (err) {
            console.error("Error fetching book", err);
            return null;
        }
    
    }

    return {
        getAll,
        getById
    }
}




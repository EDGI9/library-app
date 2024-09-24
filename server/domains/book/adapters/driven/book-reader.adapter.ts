import express from "express";

import database from "../../../../config/database.js";

import { ObjectId } from "mongodb";
import { BookEntity } from "../../core/entities/book.entity.js";
import { BookReaderDrivenPorts } from "../../ports/driven/book-reader-driven.ports.js";
import { BookDatabase } from "../../core/constants/book-database.constants.js";
import { BookProcessedFiltersEntity, BookFiltersEntity } from "../../core/entities/book-filters.entity.js";

import { bookHandler } from "../../core/middleware/books.middleware.js";

export function BookReaderAdapter(): BookReaderDrivenPorts{
    async function getAll(): Promise<BookEntity[]> {

        try {
            let collection = await database.collection(BookDatabase);
            let results = await collection.find({}).toArray();

            const entries: BookEntity[] = results.map((doc) => bookHandler(doc))
            
            return entries
        } catch (err) {
            console.error("Error fetching books", err);
            return [];
        }
    }

    async function getById(id: string) : Promise<BookEntity | {}> {
        try {
            if (!id) {
                throw new Error("No Id provided");
            }

            let collection = await database.collection(BookDatabase);
            let query = { _id: new ObjectId(id) };
            
            let result = await collection.findOne(query);
            const processedResult = bookHandler(result);
            if (!result) {
                return {};
            } else {
                return processedResult;
            }
        } catch (err) {
            console.error("Error fetching book", err);
            return {};
        }
    
    }

    async function getByFilters(filters: BookFiltersEntity): Promise<BookEntity[]> {
        try {
            if (!filters) {
                throw new Error("No Filters provided");
            }
            
            const collection = await database.collection(BookDatabase);
            const query: BookProcessedFiltersEntity = {};
            
            if (filters.name) {
                query.name = { $regex: new RegExp(filters.name.toString(), 'i') };
            }
            
            if (filters.genre && filters.genre.length > 0) {
                query.genre = { $in:  filters.genre.split(',') };
            }
            
            if (filters.author) {
                query.author = {$regex: new RegExp(filters.author.toString(), 'i') };
            }
    
            const results = await collection.find(query).toArray();
            
            const entries: BookEntity[] = results.map((doc) => bookHandler(doc));
            
            return entries;
        } catch (err) {
            console.error("Error fetching books", err);
            return []; 
        }
    }

    return {
        getAll,
        getById,
        getByFilters
    }
}




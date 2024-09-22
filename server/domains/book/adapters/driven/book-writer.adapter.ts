import express from "express";

import database from "../../../../config/database.js";

import { ObjectId } from "mongodb";
import { BookEntity } from "../../core/entities/book.entity.js";
import { BookWriterDrivenPorts } from "../../ports/driven/book-writer-driven.ports.js";
import { BookDatabase } from "../../core/constants/book-database.constants.js";

export function BookWritterAdapter(): BookWriterDrivenPorts {

    async function create(book: BookEntity): Promise<void> {
        try {
            let collection = await database.collection(BookDatabase);
            await collection.insertOne(book);

        } catch(error){
            console.error("Error adding book", error);
            return;
        }
    }

    async function update(id: string, book: BookEntity): Promise<void> {
        try {
            let query = {_id: new ObjectId(id) };
            const updates = {
                $set: book
            }
    
            let collection = database.collection(BookDatabase);
            collection.updateOne(query, updates);

        } catch (error) {
            console.error("Error updating book", error);
            return;
        }
    }

    async function remove(id: string): Promise<void> {
        try {
            let query = {_id: new ObjectId(id) }
            const collection = database.collection(BookDatabase);
            collection.deleteOne(query);
    
        } catch (error) {
            console.error("Error deleting book", error);
            return;
        }
    }

    return {
        create,
        update,
        remove
    }
}
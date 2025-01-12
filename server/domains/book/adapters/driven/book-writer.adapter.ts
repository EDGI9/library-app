import express from 'express';

import { getDatabaseClient } from '../../../../config/database';

import { ObjectId } from 'mongodb';
import { BookEntity } from '../../core/entities/book.entity';
import { BookWriterDrivenPorts } from '../../ports/driven/book-writer-driven.ports';
import {
    BookCollection,
    DatabaseName,
} from '../../core/constants/book-database.constants';

export function BookWritterAdapter(): BookWriterDrivenPorts {
    async function create(book: BookEntity): Promise<void> {
        try {
            let collection = await getDatabaseClient()
                .db(DatabaseName)
                .collection(BookCollection);
            await collection.insertOne(book);
        } catch (error) {
            console.error('Error adding book', error);
            return;
        }
    }

    async function update(id: string, book: BookEntity): Promise<void> {
        try {
            let query = { _id: new ObjectId(id) };
            const updates = {
                $set: book,
            };

            let collection = getDatabaseClient()
                .db(DatabaseName)
                .collection(BookCollection);
            collection.updateOne(query, updates);
        } catch (error) {
            console.error('Error updating book', error);
            return;
        }
    }

    async function remove(id: string): Promise<void> {
        try {
            let query = { _id: new ObjectId(id) };
            const collection = getDatabaseClient()
                .db(DatabaseName)
                .collection(BookCollection);
            collection.deleteOne(query);
        } catch (error) {
            console.error('Error deleting book', error);
            return;
        }
    }

    return {
        create,
        update,
        remove,
    };
}

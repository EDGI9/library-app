import { aw } from 'vitest/dist/chunks/reporters.WnPwkmgA';
import { getDatabaseClient } from '../../../../config/database';
import {
    DatabaseName,
    AuthorCollection,
} from '../../core/constants/author-database.constants';
import { AuthorEntity } from '../../core/entities/author.entity';
import { AuthorWriterDrivenPorts } from '../../ports/driven/author-writer-drivern.port';
import { ObjectId } from 'mongodb';

export function AuthorWriterAdapter(): AuthorWriterDrivenPorts {
    async function create(autor: AuthorEntity) {
        try {
            let collection = await getDatabaseClient()
                .db(DatabaseName)
                .collection(AuthorCollection);
            await collection.insertOne(autor);
        } catch (error) {
            console.error('Error creating author', error);
            return;
        }
    }
    async function update(id: string, author: AuthorEntity) {
        try {
            let query = { _id: new ObjectId(id) };
            const updates = {
                $set: author,
            };

            let collection = await getDatabaseClient()
                .db(DatabaseName)
                .collection(AuthorCollection);
            await collection.updateOne(query, updates);
        } catch (error) {
            console.error('Error updating author', error);
            return;
        }
    }
    async function remove(id: string) {
        try {
            let query = { _id: new ObjectId(id) };
            const collection = await getDatabaseClient()
                .db(DatabaseName)
                .collection(AuthorCollection);
            await collection.deleteOne(query);
        } catch (error) {
            console.error('Error removing author', error);
            return;
        }
    }

    return {
        create,
        update,
        remove,
    };
}

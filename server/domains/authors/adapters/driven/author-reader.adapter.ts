import { ObjectId } from 'mongodb';
import { getDatabaseClient } from '../../../../config/database';
import {
    AuthorCollection,
    DatabaseName,
} from '../../core/constants/author-database.constants';
import { AuthorEntity } from '../../core/entities/author.entity';
import { AuthorReaderDrivenPorts } from '../../ports/driven/author-reader-driven.port';

export function AuthorReaderAdapter(): AuthorReaderDrivenPorts {
    async function getAll() {
        try {
            let collection = await getDatabaseClient()
                .db(DatabaseName)
                .collection(AuthorCollection);
            let results = await collection.find({}).toArray();
            //@ts-ignore
            const entries: AuthorEntity[] = results.map((doc) => doc);

            return entries;
        } catch (err) {
            console.error('Error fetching authors', err);
            return [];
        }
    }
    async function getById(id: string) {
        try {
            if (!id) {
                throw new Error('No Id provided');
            }

            let collection = await getDatabaseClient()
                .db(DatabaseName)
                .collection(AuthorCollection);
            let query = { _id: new ObjectId(id) };

            let result = await collection.findOne(query);
            if (!result) {
                return {};
            } else {
                return result;
            }
        } catch (err) {
            console.error('Error fetching author', err);
            return {};
        }
    }

    return {
        getAll,
        getById,
    };
}

import { MongoClient, ServerApiVersion } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';
import Settings from '../settings/index';

//TODO: Create DatabaseControler using hexagonal arquitecture

let client: MongoClient;
let uri: string;

export async function setupDatabaseClient() {
    if (Settings.useMockDatabase === true) {
        const mockMongoServer = await MongoMemoryServer.create();
        uri = mockMongoServer.getUri();
        console.log(`Connected to mock database at ${uri}`);
    } else {
        uri = Settings.dbConnectionString;
        console.log(`Connected to database at ${uri}`);
    }

    client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });

    await client.connect();
    return client;
}

export function getDatabaseClient() {
    if (!client) {
        throw new Error(
            'Database client is not set up. Call setupDatabaseClient() first.',
        );
    }
    return client;
}

export async function closeDatabaseClient() {
    if (client) {
        await client.close();
        console.log('Databse connection closed');
    }
}

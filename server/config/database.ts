import {MongoClient, ServerApiVersion } from "mongodb"
import Settings from "../settings/index.js"

const uri = Settings.dbConnectionString || "mongodb://mongo:27017";
//@ts-ignore
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

try {
    await client.connect();
    await client.db('admin').command({ping: 1});

    console.log("Connection successful");
    
} catch(err) {
    console.error("failed to connect", err);
}

let db = client.db("library");

export default db
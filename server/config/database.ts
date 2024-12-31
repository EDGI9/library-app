import { MongoClient, ServerApiVersion } from "mongodb";
import Settings from "../settings/index";

const uri = Settings.dbConnectionString || "mongodb://mongo:27017";
//@ts-ignore
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function tryConnection() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });

    console.log("Connection successful");
  } catch (err) {
    console.error("failed to connect", err);
    throw Error("Failed Database connection");
  }
}

tryConnection();

let db = client.db("library");

export default db;

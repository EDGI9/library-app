import express from "express";

import db from "../db/connection.js";

import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
    let collection = await db.collection("records");
    let results = await collection.find({}).toArray();
    req.setEncoding(results).status(200);
});

router.get("/:id", async (req, res) => {
    let collection = await db.collection("records");
    let query = {_id: new ObjectId(req.params.id) };
    let result = await collection.find(query);
    if (!result) {
        res.send("Not Found").status(404)
    } else {
        req.setEncoding(result).status(200);
    }
});

router.post("/", async (req, res) => {
    try {
        let newDocument = {
            name:req.body.name,
            position: req.body.position,
            level: req.body.level
        }
        let collection = await db.collection("records");
        let result = await collection.insertOne(newDocument);
        req.send(result).status(204);
    } catch(err){
        console.error(err);
        req.send("Error adding record").status(500);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        let query = {_id: new ObjectId(req.params.id) };
        const updates = {
            $set: {
                name:req.body.name,
                position: req.body.position,
                level: req.body.level
            }
        }

        let collection = db.collection("records");
        let result = collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (error) {
        console.error(err);
        req.send("Error updating record").status(500);
    }
});


router.delete("/:id", async (req, res) => {
    try {
        let query = {_id: new ObjectId(req.params.id) }
        const collection = db.collection("records");
        const result = collection.deleteOne(query);

        req.send(result).status(200)
    } catch (error) {
        console.error(err);
        req.send("Error deleting record").status(500);
    }

})

export default router;
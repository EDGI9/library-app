import express from 'express';
import cors from 'cors';

import Settings from '../settings/index';
import { BookController } from '../domains/book/adapters/driver/book-driver.adapter';
import { setupDatabaseClient } from './database';

const PORT = Settings.port;
const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

//TODO: Create DatabaseControler using hexagonal arquitecture
setupDatabaseClient();

BookController(app, router);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

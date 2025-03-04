import dotenv from 'dotenv';
dotenv.config();

const PORT = 5000;

export default {
    dbConnectionString: process.env.DATABASE_URI || 'mongodb://mongo:27017',
    port: process.env.PORT || PORT,
    useMockDatabase: process.env.USE_MOCK_DATABASE === 'true' || false,
    origin: process.env.FRONTEND_URL || `http://localhost:${PORT}`,
};

export default {
    dbConnectionString: process.env.DATABASE_URI || 'mongodb://mongo:27017',
    port: process.env.PORT || 5000,
    useMockDatabase: process.env.USE_MOCK_DATABASE || false,
};

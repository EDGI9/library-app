import { beforeAll, afterAll } from 'vitest';
import { setupDatabaseClient, closeDatabaseClient } from './database';

// Vitest hooks for global setup/teardown
beforeAll(async () => {
    await setupDatabaseClient();
});

afterAll(async () => {
    await closeDatabaseClient();
});

import { describe, it, expect, vi } from 'vitest';
import { AuthorDriverService } from '../index';

describe('Test Author service', () => {
    it(
        'Gets Driver Author',
        {
            timeout: 30000,
            retry: 3,
        },
        async () => {
            expect(AuthorDriverService.get).toBeDefined();
            expect(AuthorDriverService.get).toBeInstanceOf(Function);

            //Using doMyJob middleware that connects to the driven adapter
            const testString = 'This is --- Driven --- Reader Adapter';

            const spy = vi.spyOn(AuthorDriverService, 'get');
            // .mockResolvedValue('My get test');
            const result = await AuthorDriverService.get();

            expect(spy).toHaveBeenCalledOnce();

            expect(result).toBe(testString);
        },
    );

    it(
        'Updates Driver Author',
        {
            timeout: 30000,
            retry: 3,
        },
        async () => {
            expect(AuthorDriverService.update).toBeDefined();
            expect(AuthorDriverService.update).toBeInstanceOf(Function);

            const testString = 'This is --- Driven --- Writer Adapter';

            const spy = vi.spyOn(AuthorDriverService, 'update');
            // .mockResolvedValue(testString);
            const result = await AuthorDriverService.update();

            expect(spy).toHaveBeenCalledOnce();
            expect(result).toBe(testString);
        },
    );
});

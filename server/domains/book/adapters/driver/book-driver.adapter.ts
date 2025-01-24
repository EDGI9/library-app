import { Express, Router, Request, Response } from 'express';
import { BookResourcePathConstants } from '../../core/constants/book-resource-path.constants';
import Books from '../../index';
import { BookFiltersDTO } from '../../core/dtos/book-filters.dto';

export function BookController(app: Express, router: Router): void {
    router.get(
        BookResourcePathConstants.ROOT,
        async (req: Request, res: Response): Promise<void> => {
            try {
                res.json(await Books.getAll());
            } catch (err) {
                console.error(err);
                res.status(500).send("Couldn't get Books");
            }
        },
    );

    router.get(
        BookResourcePathConstants.PARAM_ID,
        async (req: Request, res: Response): Promise<void> => {
            try {
                const { id } = req.params;

                const response = await Books.getById(id);

                if (!response) {
                    res.status(404);
                }

                res.json(response);
            } catch (err) {
                console.error(err);
                res.status(500).send("Couldn't get Book");
            }
        },
    );

    router.post(
        BookResourcePathConstants.ROOT,
        async (req: Request, res: Response): Promise<void> => {
            try {
                await Books.create(req.body);

                res.status(201).json({ message: 'Book created successfully' });
            } catch (err) {
                console.error(err);
                res.status(500).send("Couldn't create Book");
            }
        },
    );

    router.put(
        BookResourcePathConstants.PARAM_ID,
        async (req: Request, res: Response): Promise<void> => {
            try {
                const { id } = req.params;
                await Books.update(id, req.body);

                res.status(201).json({ message: 'Book updated successfully' });
            } catch (err) {
                console.error(err);
                res.status(500).send("Couldn't update Book");
            }
        },
    );

    router.delete(
        BookResourcePathConstants.PARAM_ID,
        async (req: Request, res: Response): Promise<void> => {
            try {
                const { id } = req.params;
                await Books.remove(id);

                res.status(201).json({ message: 'Book deleted successfully' });
            } catch (err) {
                console.error(err);
                res.status(500).send("Couldn't delete Book");
            }
        },
    );

    app.get(
        BookResourcePathConstants.BASE,
        async (req: Request, res: Response): Promise<void> => {
            try {
                const filters: BookFiltersDTO = {};
                if (req.query.name) {
                    filters.name = req.query.name.toString();
                }
                if (req.query.genre) {
                    filters.genre = req.query.genre.toString();
                }

                const response = await Books.getByFilters(filters);

                if (!response) {
                    res.status(404);
                }

                res.json(response);
            } catch (err) {
                console.error(err);
                res.status(500).send("Couldn't get Book");
            }
        },
    );

    app.use(BookResourcePathConstants.BASE, router);
}

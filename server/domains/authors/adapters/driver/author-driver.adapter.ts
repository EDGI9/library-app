import { Express, Request, Response, Router } from 'express';
import Authors from '../../index';
import { AuthorResourcePathConstants } from '../../core/constants/author-resource-path.constants';

export function AuthorController(app: Express, router: Router): void {
    app.get(
        AuthorResourcePathConstants.BASE,
        async (req: Request, res: Response): Promise<void> => {
            try {
                //TODO
            } catch (err) {
                console.error(err);
                res.status(500).send("Couldn't get Authors");
            }
        },
    );

    app.use(AuthorResourcePathConstants.BASE, router);
}

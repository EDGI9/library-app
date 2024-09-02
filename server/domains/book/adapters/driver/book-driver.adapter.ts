import { Express, Router, Request, Response } from "express";
import { BookResourcePathConstants } from "../../core/constants/book-resource-path.constants.js";
import Books from "../../index.js";
import { BookDTO } from "../../core/dtos/book.dto.js";


export function BookController(app: Express, router: Router) : void {
    router.get(BookResourcePathConstants.ROOT, async (req: Request, res: Response): Promise<void> => {
        res.json(await Books.getAll());
    })

    router.get(BookResourcePathConstants.PARAM_ID, async (req: Request, res: Response): Promise<void> => {
        try {
            const {id} = req.params;

            const response = await Books.getById(id);

            if(!response) {
                res.status(404);
            }

            res.json(response);

        } catch (err) {
            console.error(err);
            res.status(500).send("Couldn't get Book");
        }
    })

    router.post(BookResourcePathConstants.PARAM_ID, async (req: Request, res: Response): Promise<void> => {
        try {
            res
            .status(201)
            .json(await Books.create(req.body));
            
        } catch (err) {
            console.error(err);
            res.status(500).send("Couldn't create Book");
        }
    })

    router.put(BookResourcePathConstants.PARAM_ID, async (req: Request, res: Response): Promise<void> => {
        try {
            const {id} = req.params;

            res
            .status(201)
            .json(await Books.update(id, req.body));
            
        } catch (err) {
            console.error(err);
            res.status(500).send("Couldn't update Book");
        }
    })

    router.delete(BookResourcePathConstants.PARAM_ID, async (req: Request, res: Response): Promise<void> => {
        try {
            const {id} = req.params;
            
            res
            .status(201)
            .json(await Books.remove(id));
            
        } catch (err) {
            console.error(err);
            res.status(500).send("Couldn't delete Book");
        }
    })

    app.use(BookResourcePathConstants.BASE, router)
}
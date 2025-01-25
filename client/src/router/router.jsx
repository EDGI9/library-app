import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import App from '../App.jsx';
const BookGalleryPage = lazy(() => import('../views/BookGalleryPage.jsx'));
const BookDetailsPage = lazy(() => import('../views/BookDetailsPage.jsx'));
const BookEditPage = lazy(() => import('../views/BookEditPage.jsx'));
const Homepage = lazy(() => import('../views/Homepage.jsx'));

import { isDevMode } from '../config/enviornment.js';
import { routes } from '../config/routes.js';

let routerRoutes = [
    {
        path: `${routes.HOMEPAGE}`,
        element: <App />,
        children: [
            {
                path: `${routes.HOMEPAGE}`,
                element: <Homepage />,
            },
        ],
    },
    {
        path: `${routes.BOOK_DETAILS}/:id`,
        element: <App />,
        children: [
            {
                path: `${routes.BOOK_DETAILS}/:id`,
                element: <BookDetailsPage />,
            },
        ],
    },
    {
        path: `${routes.GALLERY}`,
        element: <App />,
        children: [
            {
                path: `${routes.GALLERY}`,
                element: <BookGalleryPage />,
            },
        ],
    },
];

if (isDevMode) {
    routerRoutes.push(
        {
            path: `${routes.EDIT_BOOK}/:id`,
            element: <App />,
            children: [
                {
                    path: `${routes.EDIT_BOOK}/:id`,
                    element: <BookEditPage />,
                },
            ],
        },
        {
            path: `${routes.CREATE_BOOK}`,
            element: <App />,
            children: [
                {
                    path: `${routes.CREATE_BOOK}`,
                    element: <BookEditPage />,
                },
            ],
        },
    );
}

const router = createBrowserRouter(routerRoutes);

export default router;

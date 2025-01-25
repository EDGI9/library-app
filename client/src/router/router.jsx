import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import App from '../App.jsx';
const BookGalleryPage = lazy(() => import('../views/BookGalleryPage.jsx'));
const BookDetailsPage = lazy(() => import('../views/BookDetailsPage.jsx'));
const BookEditPage = lazy(() => import('../views/BookEditPage.jsx'));
const Homepage = lazy(() => import('../views/Homepage.jsx'));

import { isDevMode } from '../config/enviornment.js';

let routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Homepage />,
            },
        ],
    },
    {
        path: '/view/:id',
        element: <App />,
        children: [
            {
                path: '/view/:id',
                element: <BookDetailsPage />,
            },
        ],
    },
    {
        path: '/gallery',
        element: <App />,
        children: [
            {
                path: '/gallery',
                element: <BookGalleryPage />,
            },
        ],
    },
];

if (isDevMode) {
    routes.push(
        {
            path: '/edit/:id',
            element: <App />,
            children: [
                {
                    path: '/edit/:id',
                    element: <BookEditPage />,
                },
            ],
        },
        {
            path: '/create',
            element: <App />,
            children: [
                {
                    path: '/create',
                    element: <BookEditPage />,
                },
            ],
        },
    );
}

const router = createBrowserRouter(routes);

export default router;

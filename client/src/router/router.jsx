import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import BookEditPage from '../views/BookEditPage.jsx';
import BookDetailsPage from '../views/BookDetailsPage.jsx';
import BookGalleryPage from '../views/BookGalleryPage.jsx';
import Homepage from '../views/Homepage.jsx';
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

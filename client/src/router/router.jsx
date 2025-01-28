import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import App from '../App.jsx';
const BookGalleryPage = lazy(() => import('../views/BookGalleryPage.jsx'));
const BookDetailsPage = lazy(() => import('../views/BookDetailsPage.jsx'));
const BookEditPage = lazy(() => import('../views/BookEditPage.jsx'));
const Homepage = lazy(() => import('../views/Homepage.jsx'));
const ErrorFallback = lazy(() => import('../components/ErrorFallback.jsx'));

import { isDevMode } from '../config/enviornment.js';
import { routes } from '../config/routes.js';

let routerRoutes = [
    {
        path: `${routes.HOMEPAGE}`,
        element: <App />,
        children: [
            {
                path: `${routes.HOMEPAGE}`,
                element: (
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <Homepage />
                    </ErrorBoundary>
                ),
            },
        ],
    },
    {
        path: `${routes.BOOK_DETAILS}/:id`,
        element: <App />,
        children: [
            {
                path: `${routes.BOOK_DETAILS}/:id`,
                element: (
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <BookDetailsPage />
                    </ErrorBoundary>
                ),
            },
        ],
    },
    {
        path: `${routes.GALLERY}`,
        element: <App />,
        children: [
            {
                path: `${routes.GALLERY}`,
                element: (
                    <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <BookGalleryPage />
                    </ErrorBoundary>
                ),
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
                    element: (
                        <ErrorBoundary FallbackComponent={ErrorFallback}>
                            <BookEditPage />
                        </ErrorBoundary>
                    ),
                },
            ],
        },
        {
            path: `${routes.CREATE_BOOK}`,
            element: <App />,
            children: [
                {
                    path: `${routes.CREATE_BOOK}`,
                    element: (
                        <ErrorBoundary FallbackComponent={ErrorFallback}>
                            <BookEditPage />
                        </ErrorBoundary>
                    ),
                },
            ],
        },
    );
}

const router = createBrowserRouter(routerRoutes);

export default router;

import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';
import BookEditPage from '../views/BookEditPage.jsx';
import BookDetailsPage from '../views/BookDetailsPage.jsx';
import BookGalleryPage from '../views/BookGalleryPage.jsx';
import Homepage from '../views/Homepage.jsx';

const router = createBrowserRouter([
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
]);

export default router;

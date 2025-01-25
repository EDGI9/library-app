import * as React from 'react';
import * as ReactDom from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import router from './router/router.jsx';
import store from './store/index.ts';
import './index.css';
import './utils/tailwind-animation.js';

const Loading = React.lazy(() => import('./components/Loading.jsx'));

ReactDom.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <React.Suspense fallback={<Loading />}>
            <RouterProvider router={router} />
        </React.Suspense>
    </Provider>,
);

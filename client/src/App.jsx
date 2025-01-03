import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    const location = useLocation();
    const classList = `w-full h-full bg-main-background bg-no-repeat ${
        location.pathname == '/' ? 'bg-[center_top_45em]' : 'bg-[center_top]'
    } `;

    return (
        <div className={classList}>
            <Toaster
                position="top-right"
                reverseOrder={true}
            />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};
export default App;

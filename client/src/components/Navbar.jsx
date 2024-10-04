import { NavLink } from "react-router-dom";

import logoImage from '../assets/logo.webp';

const Navbar = () => {
    return (
        <div data-testid="qa-navbar">
            <nav className="flex justify-between items-center mb-6 p-6 gap-8">
                <NavLink to="/" className="flex-grow">
                    <img alt="Logo" className="h-10 inline" src={logoImage}></img>
                </NavLink>

                <NavLink className="inline-flex items-center justify-center text-primary font-bold hover:border-b-2 border-primary px-3" to="/gallery">
                    Gallery
                </NavLink>

                <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-primary text-white hover:text-primary hover:bg-slate-100 h-9 rounded-md px-3" to="/create">
                    Add Book
                </NavLink>
            </nav>
        </div>
    )
}

export default Navbar
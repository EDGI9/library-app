import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="flex justify-between istems-center mb-6">
                <NavLink to="/">
                    <img alt="MongoDB logo" className="h-10 inline" src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/mongodb/mongodb-original-wordmark.svg"></img>
                </NavLink>

                <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3" to="/create">
                    Add Book
                </NavLink>
            </nav>
        </div>
    )
}
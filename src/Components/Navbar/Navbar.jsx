import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="mt-12">
            <nav className="flex flex-col md:flex-row gap-2 justify-between items-center container mx-auto py-5 px-3">
                <div>
                    <h2><img src="/logo.png" alt="" /></h2>
                </div>
                <ul className="flex items-center gap-5 text-xl font-bold">
                    <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                        >
                         Home
                        </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                        >
                        Donation
                        </NavLink>
                    </li>
                    <li>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                        >
                         Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
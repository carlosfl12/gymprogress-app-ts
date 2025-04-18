import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white px-8 py-4 shadow-md flex justify-between items-center">
            <Link to ="/" className="text-2xl font-bold tracking-tight">
                GymTracker
            </Link>
            <div className="flex gap-4">
                <Link to="/login" className="hover:text-blue-400 transition">
                    Iniciar sesión
                </Link>
                <Link to="/register" className="hover:text-blue-400 transition">
                    Registrarse
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;
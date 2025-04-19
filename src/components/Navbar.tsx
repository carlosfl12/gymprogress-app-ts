import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const isLoggedIn = !!localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">GymProgress</Link>
      </h1>
      <nav className="space-x-4 flex items-center">
        {isLoggedIn ? (
          <>
            <Link
              to="/dashboard"
              className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-gray-900 transition"
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition"
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-gray-900 transition"
          >
            Iniciar sesión
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Navbar

import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">GymProgress</h1>
        <button
          onClick={handleLogout}
          className="border border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-gray-900 transition"
        >
          Cerrar sesión
        </button>
      </header>

      {/* Main content */}
      <main className="flex-1 bg-gray-100 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-black">Bienvenido de nuevo 💪</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-4 shadow">
            <p className="text-sm text-gray-500">Entrenamientos este mes</p>
            <h3 className="text-2xl font-bold mt-1 text-gray-500">12</h3>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow">
            <p className="text-sm text-gray-500">Peso actual</p>
            <h3 className="text-2xl font-bold mt-1 text-gray-500">75 kg</h3>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow">
            <p className="text-sm text-gray-500">Objetivo</p>
            <h3 className="text-2xl font-bold mt-1 text-gray-500">80 kg</h3>
          </div>
        </div>

        <div className="mt-6">
          <button
            className="text-white bg-blue-600 hover:bg-blue-700 rounded-xl px-6 py-2 transition"
          >
            + Añadir nuevo registro
          </button>
        </div>
      </main>
    </div>
  )
}

export default Dashboard

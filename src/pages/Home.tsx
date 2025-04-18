import { Link } from 'react-router-dom';
const Home =  () => {
    return (
        <div className="h-screen w-screen bg-gray-900 text-red flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            GymTracker 🏋️‍♂️
          </h1>
          <p className="text-gray-300 text-lg">
            Lleva el control de tus entrenamientos de forma fácil y moderna.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl text-lg shadow-md transition"
            >
              Iniciar sesión
            </Link>
            <Link
              to="/register"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl text-lg shadow-md transition"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Home;
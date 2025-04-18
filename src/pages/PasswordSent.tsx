import { Link } from 'react-router-dom'

const PasswordSent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">¡Correo enviado!</h2>
        <p className="text-sm text-gray-300 mb-6">
          Si la dirección ingresada está registrada, recibirás un enlace para restablecer tu contraseña.
          Asegúrate de revisar también la carpeta de spam o correo no deseado.
        </p>
        <Link
          to="/login"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Volver al login
        </Link>
      </div>
    </div>
  )
}

export default PasswordSent

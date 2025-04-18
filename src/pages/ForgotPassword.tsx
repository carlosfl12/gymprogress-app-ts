const ForgotPassword = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Recuperar contraseña</h2>
          <p className="text-sm text-gray-300 mb-4 text-center">
            Introduce tu correo y te enviaremos un enlace para restablecer tu contraseña.
          </p>
          <form className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = '/password-sent';
            }
          }>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="correo@ejemplo.com"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Enviar enlace
            </button>
          </form>
        </div>
      </div>
    )
  }
  
  export default ForgotPassword
  
import { useEffect, useState } from 'react'

const HealthCheck = () => {
  const [status, setStatus] = useState<string>('Comprobando...')
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    fetch('http://localhost:8000/api/health')
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status)
        setMessage(data.message)
      })
      .catch(() => {
        setStatus('error')
        setMessage('No se pudo conectar con el servidor.')
      })
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Estado del servidor</h1>
      <p className="text-lg text-gray-300">Estado: <strong>{status}</strong></p>
      <p className="text-sm mt-2 text-gray-400">{message}</p>
    </div>
  )
}

export default HealthCheck

import cors from 'cors'
import express from 'express'

const app = express()
const PORT = 8000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Servidor backend funcionando 💪')
})

app.listen(PORT, () => {
  console.log(`✅ Backend escuchando en http://localhost:${PORT}`)
})

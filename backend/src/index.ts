import cors from 'cors'
import express from 'express'

const app = express()
const PORT = 8000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Servidor backend funcionando 💪')
})

app.get('/api/health', (req, res) => {
  res.json({status: 'ok', message: "Servidor funcionando"})
})

app.post('/api/register', (req, res) => {
    const {email, password} = req.body;
    
    if (!email || !password) {
        res.status(400).json({error: 'Faltan campos obligatorios'})
        return;
    }
    
    console.log(`📝 Registro simulado de usuario: ${email}`)
    
    res.status(201).json({message: 'Usuario registrado correctamente', user: {email}})
});


app.listen(PORT, () => {
  console.log(`✅ Backend escuchando en http://localhost:${PORT}`)
})

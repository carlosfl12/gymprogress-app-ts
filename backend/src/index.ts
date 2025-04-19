import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import cors from 'cors'
import express from 'express'
import jtw from 'jsonwebtoken'

const app = express()
const PORT = 8000
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Servidor backend funcionando 💪')
})

app.get('/api/health', (req, res) => {
  res.json({status: 'ok', message: "Servidor funcionando"})
})

app.post('/api/register', async (req, res) => {
    const {email, password} = req.body;
    
    if (!email || !password) {
        res.status(400).json({error: 'Faltan campos obligatorios'})
        return;
    }

    try {
      const existing = await prisma.user.findUnique({where: {email}})
      if (existing) {
        res.status(409).json({error: 'El correo ya está registrado'})
        return;
      }
      const hashedPassword = await bcrypt.hash(password, 10)

      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword, // TODO: Hash password before saving
        },
      });

      res.status(201).json({message: 'Usuario registrado correctamente', user: {email: user.email}})

    } catch (error) {
      console.error(error);
      res.status(500).json({error: 'Error al registrar el usuario'})
    }
});

app.post('/api/login', async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        res.status(400).json({error: 'Faltan campos obligatorios'})
        return;
    }

    try {
      const user = await prisma.user.findUnique({where: {email}})

      if (!user) {
        res.status(401).json({error: 'Credenciales incorrectas'})
        return;
      }

      const passwordMatch = await bcrypt.compare(password, user.password)

      if (!passwordMatch) {
        res.status(401).json({error: 'Credenciales incorrectas'})
        return;
      }
      const token = jtw.sign({
        userID: user.id,
        email: user.email},
        process.env.JWT_SECRET as string,
        {expiresIn: '2h'}
      )
      res.status(200).json({message: 'Inicio de sesión exitoso', token, user: {email: user.email}})
    } catch (error) {
      console.error(error);
      res.status(500).json({error: 'Error al iniciar sesión'})

    }
});


app.listen(PORT, () => {
  console.log(`✅ Backend escuchando en http://localhost:${PORT}`)
})

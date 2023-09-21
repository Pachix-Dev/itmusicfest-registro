import express from 'express'
import pkg from 'body-parser'
import cors from 'cors'
import QRCode from 'qrcode'
import { v4 as uuidv4 } from 'uuid'
import { RegisterModel } from './models/mysql/registro.js'

const { json } = pkg
const app = express()
app.use(json())
app.use(
  cors({
    origin: [
      'http://3.14.118.246',
      'http://3.14.118.246:1234',
      'http://localhost:5173',
      'http://localhost:1234'
    ]
  })
)
app.disable('x-powered-by')

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.get('/register', async (req, res) => {
  try {
    const registers = await RegisterModel.getAll()
    res.status(200).json(registers)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error al obtener registros' })
  }
})

app.post('/register', async (req, res) => {
  const { body } = req
  const uuid = uuidv4()

  try {
    QRCode.toFile(`/opt/bitnami/nginx/html/qr/${uuid}.png`, uuid, {
      errorCorrectionLevel: 'H'
    })
    console.log('QR code saved!')

    const urlQR = `http://3.14.118.246/qr/${uuid}.png`

    await RegisterModel.create({ ...body, urlQR, uuid })

    res.status(201).json({ message: 'Registro creado' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error al crear el registro', sqlState: error?.sqlState })
  }
})

const PORT = process.env.PORT || 1234
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})

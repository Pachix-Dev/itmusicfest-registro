import express, { json } from 'express'

import { RegisterModel } from './models/mysql/registro.js'
import cors from 'cors'
import QRCode from 'qrcode'
import { v4 as uuidv4 } from 'uuid'

const app = express()

app.use(json())

app.use(
  cors({
    origin: (origin, callback) => {
      const ACCEPTED_ORIGINS = [
        'http://3.133.150.190',
        'http://3.133.150.190:1234',
        'http://localhost:5173',
        'http://localhost:1234'
      ]

      if (ACCEPTED_ORIGINS.includes(origin) || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  })
)

app.disable('x-powered-by')

app.get('/register', async (request, response) => {
  try {
    const registers = await RegisterModel.getAll()
    response.status(200).json(registers)
  } catch (error) {
    console.error(error)
    response.status(500).json({ message: 'Error al obtener registros' })
  }
})

app.post('/register', async (request, response) => {
  const {
    name, apellidoPaterno, apellidoMaterno, sexo, rangoEdad, email, phone, typeRegister, linkedin, facebook,
    instagram, tiktok, empresa, industria, cargo, pais, calleNumero, codigoPostal, colonia, municipio, ciudad, estado,
    paginaWeb, phoneEmpresa, comoTeEnteraste, productoInteres, nivelInfluencia, serExpositor
  } = request.body

  try {
    const uuid = uuidv4()
    QRCode.toFile(`./assets/qr/${uuid}.png`, uuid, {
      errorCorrectionLevel: 'H'
    }, function (err) {
      if (err) throw err
      console.log('QR code saved!')
    })
    const urlQR = `http://3.133.150.190/assets/qr/${uuid}.png`
    await RegisterModel.create({
      name,
      apellidoPaterno,
      apellidoMaterno,
      sexo,
      rangoEdad,
      email,
      phone,
      typeRegister,
      linkedin,
      facebook,
      instagram,
      tiktok,
      empresa,
      industria,
      cargo,
      pais,
      calleNumero,
      codigoPostal,
      colonia,
      municipio,
      ciudad,
      estado,
      paginaWeb,
      phoneEmpresa,
      comoTeEnteraste,
      productoInteres,
      nivelInfluencia,
      serExpositor,
      urlQR,
      uuid
    })
    response.status(201).json({ message: 'Registro creado' })
  } catch (error) {
    console.error(error)
    response.status(500).json({ message: 'Error al crear el registro' })
  }
})

const PORT = process.env.PORT || 1234

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})

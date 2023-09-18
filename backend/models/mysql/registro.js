import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  user: 'root',
  password: 'KB:BQJ1AMhI.',
  // password: '',
  database: 'db_itmusicfest'
}

const connection = await mysql.createConnection(config)

export class RegisterModel {
  static async getAll () {
    const [result] = await connection.query('SELECT * FROM registro')
    return result
  }

  static async create ({
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
  }) {
    const [registers] = await connection.query('INSERT INTO registro (name, apellidoPaterno, apellidoMaterno, sexo, rangoEdad, email, phone, typeRegister, linkedin, facebook, instagram, tiktok, empresa, industria, cargo, pais, calleNumero, codigoPostal, colonia, municipio, ciudad, estado, paginaWeb, phoneEmpresa, comoTeEnteraste, productoInteres, nivelInfluencia, serExpositor, url_qr, qr_value) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [name, apellidoPaterno, apellidoMaterno, sexo, rangoEdad, email, phone, typeRegister, linkedin, facebook, instagram, tiktok, empresa, industria, cargo, pais, calleNumero, codigoPostal, colonia, municipio, ciudad, estado, paginaWeb, phoneEmpresa, comoTeEnteraste, productoInteres, nivelInfluencia, serExpositor, urlQR, uuid])
    return registers
  }
}

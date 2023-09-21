import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  user: 'root',
  password: 'KB:BQJ1AMhI.',
  // password: '',
  database: 'db_itmusicfest'
}

export class RegisterModel {
  static async getAll () {
    const connection = await mysql.createConnection(config)
    try {
      const [result] = await connection.query('SELECT * FROM registro')
      return result
    } finally {
      await connection.end() // Close the connection
    }
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
    uuid,
    emailAcompanante
  }) {
    const connection = await mysql.createConnection(config)
    try {
      const [registers] = await connection.query(
        'INSERT INTO registro (name, apellidoPaterno, apellidoMaterno, sexo, rangoEdad, email, phone, typeRegister, linkedin, facebook, instagram, tiktok, empresa, industria, cargo, pais, calleNumero, codigoPostal, colonia, municipio, ciudad, estado, paginaWeb, phoneEmpresa, comoTeEnteraste, productoInteres, nivelInfluencia, serExpositor, url_qr, qr_value, emailAcompanante) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [
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
          uuid,
          emailAcompanante
        ]
      )
      return registers
    } finally {
      await connection.end() // Close the connection
    }
  }
}

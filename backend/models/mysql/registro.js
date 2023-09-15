import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  user: 'bitnami',
  password: 'KB:BQJ1AMhI.',
  database: 'db_itmusicfest'
}

const connection = await mysql.createConnection(config)

connection.query('SELECT * FROM registro')

export class RegisterModel {
  static async getAll ({ data }) {
    const [result] = await connection.query('SELECT * FROM registro')

    console.log(result)
  }

  static async create ({ data }) {
    const [registers] = await connection.query('INSERT INTO registro SET ?', data)
    console.log(registers)
    return registers
  }
}

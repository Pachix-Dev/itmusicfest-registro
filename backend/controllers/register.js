// import { validateMovie, validatePartialMovie } from '../schemas/movies.js'

export class RegisterController {
  constructor ({ movieModel }) {
    this.movieModel = movieModel
  }

  getAll = async (req, res) => {
    const { genre } = req.query
    const movies = await this.movieModel.getAll({ genre })
    res.json(movies)
  }

  create = async (req, res) => {
    const result = ''

    if (!result.success) {
    // 422 Unprocessable Entity
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newMovie = await this.movieModel.create({ input: result.data })

    res.status(201).json(newMovie)
  }
}

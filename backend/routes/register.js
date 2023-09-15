import { Router } from 'express'
import { RegisterController } from '../controllers/register.js'

export const createRegisterRouter = ({ RegisterModel }) => {
  const registerRouter = Router()

  const registerController = new RegisterController({ RegisterModel })

  registerRouter.get('/', registerController.getAll)
  registerRouter.post('/', registerController.create)

  return registerRouter
}

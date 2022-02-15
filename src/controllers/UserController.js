import User from '../models/User'
import { sign } from 'jsonwebtoken'
import {Op} from 'sequelize'
class UserController {
  async index(req, res) {

    const users = await User.findAll({
      attributes: ['name', 'email']
    })

    return res.status(200).json({ users: users })
  }

  async create(req, res) {
    try {
      const { name, password, email } = req.body;
      await User.create({name, password, email})
  
      return res.status(201).send({ message: 'Usuário salvo com sucesso.' })
      
    } catch (error) {
      const [err] = error.errors
      return res.status(400).send({ message: err.message })
    }
  }
  
  async session(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        attributes: ['id', 'email', 'password'],
        where: {
          email: {
            [Op.eq]: email
          }
        }
      })
      if(user.password !== password){
        return res.status(400).send({ message: 'Email ou senha inválidos' })
      }

      const token = sign({userId: user.id}, process.env.SECRET, {
        expiresIn: '5m'
      })

      return res.status(201).send({ token: token })
      
    } catch (error) {
      const [err] = error.errors
      return res.status(400).send({ message: err.message })
    }
  }
}

export default new UserController()

import User from '../models/User'
import { sign } from 'jsonwebtoken'
import {Op} from 'sequelize'
import UserRole from '../models/UserRole'
class UserController {
  async index(req, res) {

    const users = await User.findAll({
      attributes: ['name', 'email'],
      include: {
        model: UserRole,
        as: 'roles'
      }
    })
    
    return res.status(200).json({ users: users })
  }

  async create(req, res) {
    try {
      const { name, password, email } = req.body;
      const roles = [1,2]
      await User.create(
        {
          name, 
          password, 
          email,
          roles: roles.map((item) => {
            return { role_id: item}
          })
        },{
          include: {
            model: UserRole,
            as: 'roles'
          }, 
       })
  
      return res.status(201).send({ message: 'Usuário salvo com sucesso.' })
      
    } catch (error) {
      console.log(error)
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

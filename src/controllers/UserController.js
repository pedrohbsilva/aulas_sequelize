import User from '../models/User'
import { sign } from 'jsonwebtoken'
import {Op} from 'sequelize'
import UserRole from '../models/UserRole'
import RoleService from '../services/role.service'
import bcrypt from 'bcrypt'
class UserController {
  async index(req, res) {
    /*
      #swagger.tags = ['user']
    */
    const users = await User.findAll({
      attributes: ['name', 'email'],
      include: {
        model: UserRole,
        as: 'roles',
        attributes: ['role_id']
      }
    })

    const usersWithRoles = await Promise.all(users.map(async({name, email, roles})=> {
      return {
        name, 
        email, 
        roles: await Promise.all(roles.map(async({role_id}) => {
          const role = await RoleService.getByRoleId(role_id)
          return role
        }))
      }
    }))
    
    return res.status(200).json({ users: usersWithRoles })
  }

  async create(req, res) {
    /*
      #swagger.tags = ['user']
    */
    try {
      const { name, password, email, roles } = req.body;
      await User.create({
        name, 
        password, 
        email,
        roles: roles.map((role)=> {
          return {role_id: role}
        })
      }, {
        include: {
          association: 'roles'
        }
      })
  
      return res.status(201).send({ message: 'Usuário salvo com sucesso.' })
      
    } catch (error) {
      console.log(error)
      const [err] = error.errors
      return res.status(400).send({ message: err.message })
    }
  }
  
  async session(req, res) {
    /*
      #swagger.tags = ['user']
    */
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        attributes: ['id', 'email', 'password'],
        where: {
          email: {
            [Op.eq]: email
          }
        },
        include: {
          model: UserRole,
          as: 'roles',
          attributes: ['role_id']
        }
      })
      const match = await bcrypt.compareSync(password, user.password)
      if(!match){
        return res.status(400).send({ message: 'Email ou senha inválidos' })
      }

      const { roles } = user

      const token = sign({userId: user.id, roles}, process.env.SECRET, {
        expiresIn: '1d'
      })

      return res.status(201).send({ token: token })
      
    } catch (error) {
      const [err] = error.errors
      return res.status(400).send({ message: err.message })
    }
  }
}

export default new UserController()

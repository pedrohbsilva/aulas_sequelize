import Role from '../models/Role'
import PermissionRole from '../models/PermissionRole';
class RoleController {
  async create(req, res) {
    try {
      const { description, permissions } = req.body;

      const response = await Role.create({description})

      permissions.map(async(permission) => {
        await PermissionRole.create({'role_id': response.id, 'permission_id': permission})  
      })
      
      return res.status(201).send({ message: 'Permissão criada com sucesso!' })
    } catch (error) {
        console.log(error)
      return res.status(400).send({ message: 'err.message '})
    }
  }
}

export default new RoleController()

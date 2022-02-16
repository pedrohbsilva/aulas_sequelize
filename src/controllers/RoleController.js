import Role from '../models/Role';
import PermissionRole from '../models/PermissionRole';
import Permission from '../models/Permission';

class RoleController {
    async create(req, res){
        try {
            const { description, permissions } = req.body
            const response = await Role.create({description})

            permissions.map(async(permission) => {
                await PermissionRole.create({
                    'role_id': response.id, 
                    'permission_id': permission
                })
            })

            return res.status(200).send({message: 'Cargo criado com sucesso.'})
        } catch (error) {
            console.log(error)
            const [err] = error.errors
            return res.status(400).send({message: err.message})
        }
    }

    async index(req, res){
        try {
            const roles = await Role.findAll({
                include: { 
                    model: PermissionRole, 
                    as: 'roles'
                }
            })
        
            return res.status(200).send({records: roles})
        } catch (error) {
            console.log(error)
            const [err] = error.errors
            return res.status(400).send({message: err.message})
        }
    }
}

export default new RoleController()
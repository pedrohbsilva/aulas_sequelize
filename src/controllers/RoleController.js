import Role from '../models/Role';
import PermissionRole from '../models/PermissionRole';
import PermissionService from '../services/permission.service'

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
            const [err] = error.errors
            return res.status(400).send({message: err.message})
        }
    }

    async index(req, res){
        try {
            const roles = await Role.findAll({
                attributes: ['description'],
                include: { 
                    model: PermissionRole, 
                    as: 'roles'
                }
            })
            
            const rolesWithPermission = await Promise.all(roles.map(async({
                description,
                roles
            }) => {
                return {
                    description,
                    permissions: await Promise.all(roles.map(async({
                        permission_id
                    }) => {
                        const permission = await PermissionService.getByPermissionId(permission_id)
                        return permission
                    }))
                }
            }))
            return res.status(200).send({records: rolesWithPermission})
        } catch (error) {
            const [err] = error.errors
            return res.status(400).send({message: err.message})
        }
    }
}

export default new RoleController()
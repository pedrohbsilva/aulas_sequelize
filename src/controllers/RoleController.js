const Role = require('../models/Role');
const PermissionRole = require('../models/PermissionRole');
const PermissionService = require('../services/permission.service')

module.exports = {
    async create(req, res){
        /*
            #swagger.tags = ['role']
        */
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
    },
    async index(req, res){
                /*
            #swagger.tags = ['role']
        */
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
            console.log(error)
            const [err] = error.errors
            return res.status(400).send({message: err.message})
        }
    }
}
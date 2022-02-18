import Permission from '../models/Permission'
import { Op } from 'sequelize'

class PermissionService {
    async getByPermissionId(permissionId){
        const getDataPermission = await Permission.findOne({
            where: {
                id: {
                    [Op.eq]: permissionId
                }
            },
            attributes: ['description']
        })

        return getDataPermission
    }
}

export default new PermissionService()
import Role from '../models/Role'
import { Op } from 'sequelize'

class RoleService {
    async getByRoleId(roleId){
        const getDataRole = await Role.findOne({
            where: {
                id: {
                    [Op.eq]: roleId
                }
            },
            attributes: ['description']
        })

        return getDataRole
    }
}

export default new RoleService()
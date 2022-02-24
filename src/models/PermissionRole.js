const connection = require('../database')
const {v4: uuidv4} = require('uuid')
const PermissionRole = connection.define('permissions_roles', {},{
    freezeTableName: true,
    hooks: {
        beforeCreate: (permissionRole) => {
            permissionRole.id = uuidv4()
        }
    }
})

module.exports = PermissionRole

// class PermissionRole extends Model {
//     static init(sequelize) {
//         super.init({
//         }, {
//             sequelize,
//             tableName: 'permissions_roles',
//             hooks: {
//                 beforeCreate: (permissionRole) => {
//                     permissionRole.id = uuidv4()
//                 }
//               }
//         })
//     }

//     static associate(models) {
//         this.belongsTo(
//             models.Role, {
//             foreignKey: 'role_id',
//             as: 'role'
//         });
//         this.belongsTo(
//             models.Permission, {
//             foreignKey: 'permission_id',
//             as: 'permission'
//         });
//     }
// }

// export default PermissionRole;
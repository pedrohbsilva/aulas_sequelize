const connection = require('../database')
const { DataTypes } = require('sequelize')
const { v4: uuidv4 } = require('uuid')
const Permission = connection.define('permissions', 
    {
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: 'A permissão deve ser única'
            }
        }    
    },
    {
        freezeTableName: true,
        hooks: {
            beforeCreate: (permission) => {
                permission.id = uuidv4()
            }
        }
    }
)

module.exports = Permission
// import { Model, DataTypes } from 'sequelize';
// import { v4 as uuidv4 } from 'uuid';
// class Permission extends Model {
//     static init(sequelize) {
//         super.init({
//             description: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 unique: {
//                     msg: 'A permissão deve ser única'
//                 }
//             }
//         }, {
//             sequelize,
//             tableName: 'permissions',
//             hooks: {
//                 beforeCreate: (permission) => {
//                   permission.id = uuidv4()
//                 }
//               }
//         })
//     }
//     static associate(models) {
//         this.hasMany(
//             models.PermissionRole,
//             {
//                 foreignKey: 'permission_id',
//                 as: 'permission'
//             }
//         );
//     }
// }

// export default Permission
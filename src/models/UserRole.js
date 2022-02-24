const connection = require('../database')
const {v4: uuidv4} = require('uuid')

const UserRole = connection.define('users_roles', {},
    {          
        freezeTableName: true,  
        hooks: {
            beforeCreate: (userRole) => {
                userRole.id = uuidv4()
            }
        }
    })

module.exports = UserRole



// import { Model, DataTypes } from 'sequelize';
// import { v4 as uuidv4 } from 'uuid';

// class UserRole extends Model {
//     static init(sequelize) {
//         super.init({}, {
//             sequelize,
//             tableName: 'users_roles',
//             hooks: {
//                 beforeCreate: (userRole) => {
//                     userRole.id = uuidv4()
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
//             models.User, {
//             foreignKey: 'user_id',
//             as: 'user'
//         });
//     }
// }
// export default UserRole
// import { Model, DataTypes } from 'sequelize';
// import { v4 as uuidv4 } from 'uuid';
const connection = require('../database')
const {DataTypes} = require('sequelize')
const {v4: uuidv4} = require('uuid')
const Role = connection.define('roles', {
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
},{
  freezeTableName: true,
  hooks: {
    beforeCreate: (role) => {
        role.id = uuidv4()
    }
  }
}
)

module.exports = Role

// class Role extends Model {
//   static init(sequelize) {
//     super.init({
//       description: {
//         type: DataTypes.STRING,
//         allowNull: false
//       }
//     }, {
//       sequelize,
//       tableName: 'roles',
//       hooks: {
//         beforeCreate: (role) => {
//             role.id = uuidv4()
//         }
//       }
//     })
//   }
//   static associate(models) {
//     this.hasMany(
//         models.PermissionRole,
//         {
//             foreignKey: 'role_id',
//             as: 'roles'
//         },
//         models.UserRole,
//         {
//             foreignKey: 'role_id',
//             as: 'roles'
//         }
//     )
//   }
// }
// export default Role
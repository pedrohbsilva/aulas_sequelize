// import { Model, DataTypes } from 'sequelize';
// import bcrypt from 'bcrypt'
// import { v4 as uuidv4 } from 'uuid';
const connection = require('../database')
const { DataTypes } = require('sequelize')
const {v4: uuidv4} = require('uuid')
const bcrypt = require('bcrypt')

// class User extends Model {
//   static init(sequelize) {
//     super.init({
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           len: {
//             msg: "Seu nome deve ter pelo menos 3 caracteres e no máximo 30.",
//             args: [3, 30]
//           }
//         }
//       },
//       email: {
//         type: {
//           type: DataTypes.STRING,
//           allowNull: false
//         },
//         validate: {
//           isEmail: {
//             msg: "O seu e-mail não está no formato correto"
//           }
//         },
//         unique: {
//           msg: "O e-mail já está inserido no banco"
//         }
//       },
//       password: {
//         type: {
//           type: DataTypes.STRING
//         },
//         validate: {
//           len: {
//             msg: "Sua senha deve ter entre 4 e 10 caracteres.",
//             args: [4, 10]
//           }
//         }
//       }
//     }, {
//       sequelize,
//       tableName: 'users',
//       hooks: {
//         beforeCreate: (user) => {
//           user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8));
//           user.id = uuidv4();
//         }
//       }
//     })
//   }
//   static associate(models) {
//     this.hasMany(
//         models.UserRole,
//         {
//             foreignKey: 'user_id',
//             as: 'roles'
//         }
//     );
//   }
// }
const User = connection.define('users', 
  {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            msg: "Seu nome deve ter pelo menos 3 caracteres e no máximo 30.",
            args: [3, 30]
          }
        }
      },
      email: {
        type: {
          type: DataTypes.STRING,
          allowNull: false
        },
        validate: {
          isEmail: {
            msg: "O seu e-mail não está no formato correto"
          }
        },
        unique: {
          msg: "O e-mail já está inserido no banco"
        }
      },
      password: {
        type: {
          type: DataTypes.STRING
        },
        validate: {
          len: {
            msg: "Sua senha deve ter entre 4 e 10 caracteres.",
            args: [4, 10]
          }
        }
      }
  },
  {
      freezeTableName: true,
      hooks: {
        beforeCreate: (user) => {
          user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8));
          user.id = uuidv4();
        }
      }
  }
)


module.exports = User
import { Model, DataTypes } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init({
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
    }, {
      sequelize,
      tableName: 'users'
    })
  }
  static associate(models) {
    this.hasMany(
        models.UserRole,
        {
            foreignKey: 'user_id',
            as: 'roles'
        }
    );
  }
}
export default User
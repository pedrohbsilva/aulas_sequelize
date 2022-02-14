import { Model, DataTypes } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      password: {
        type: {
          type: DataTypes.STRING
        }
      }
    }, {
      sequelize
    })
  }
}
export default User
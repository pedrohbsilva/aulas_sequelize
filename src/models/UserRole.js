import { Model, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

class UserRole extends Model {
    static init(sequelize) {
        super.init({}, {
            sequelize,
            tableName: 'users_roles',
            hooks: {
                beforeCreate: (userRole) => {
                    userRole.id = uuidv4()
                }
              }
        })
    }
    static associate(models) {
        this.belongsTo(
            models.Role, {
            foreignKey: 'role_id',
            as: 'role'
        });
        this.belongsTo(
            models.User, {
            foreignKey: 'user_id',
            as: 'user'
        });
    }
}
export default UserRole
import { Model, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';

class PermissionRole extends Model {
    static init(sequelize) {
        super.init({
        }, {
            sequelize,
            tableName: 'permissions_roles',
            hooks: {
                beforeCreate: (permissionRole) => {
                    permissionRole.id = uuidv4()
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
            models.Permission, {
            foreignKey: 'permission_id',
            as: 'permission'
        });
    }
}

export default PermissionRole;
import { Model, DataTypes } from 'sequelize';

class PermissionRole extends Model {
    static init(sequelize) {
        super.init({
        }, {
            sequelize,
            tableName: 'permissions_roles'
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
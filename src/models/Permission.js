import { Model, DataTypes } from 'sequelize';

class Permission extends Model {
    static init(sequelize) {
        super.init({
            description: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: {
                    msg: 'A permissão deve ser única'
                }
            }
        }, {
            sequelize,
            tableName: 'permissions'
        })
    }
    static associate(models) {
        this.hasMany(
            models.PermissionRole,
            {
                foreignKey: 'permission_id',
                as: 'permission'
            }
        );
    }
}

export default Permission
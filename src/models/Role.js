import { Model, DataTypes } from 'sequelize';

class Role extends Model {
  static init(sequelize) {
    super.init({
      description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'roles'
    })
  }
  static associate(models) {
    this.hasMany(
        models.PermissionRole,
        {
            foreignKey: 'role_id',
            as: 'roles'
        },
        models.UserRole,
        {
            foreignKey: 'role_id',
            as: 'roles'
        }
    )
  }
}
export default Role
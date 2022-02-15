import { Model, DataTypes } from 'sequelize';

class UserRole extends Model {
    static init(sequelize) {
        super.init({
            description: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'users_roles'
        })
    }
    static associate(models) {
        this.belongsTo(
            models.Role, {
            foreignKey: 'role_id', // Qual chave estrangeira dentro de Posts que representa o usuario
            as: 'role' // nome do relacionamento
        });
        this.belongsTo(
            models.User, {
            foreignKey: 'user_id',
            as: 'user'
        });
    }
}
export default UserRole
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'permissions_roles', 
      {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          default: Sequelize.fn('uuid'),
          primaryKey: true,
        },
        role_id: {
          type: Sequelize.UUID,
          references: {model: 'roles', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          allowNull: false,
        },
        permission_id: {
          type: Sequelize.UUID,
          references: {model: 'permissions', key: 'id'},
          onUpdate: 'CASCADE',
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('permissions_roles');
  }
};

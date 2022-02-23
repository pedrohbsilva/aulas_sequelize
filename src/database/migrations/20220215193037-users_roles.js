'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'users_roles', 
      {
        id: {
          type: Sequelize.UUID,
          allowNull: false,
          default: Sequelize.fn('uuid'),
          primaryKey: true,
        },
        user_id: {
          type: Sequelize.UUID,
          references: {model: 'users', key: 'id'},
          onUpdate: 'CASCADE',
          allowNull: false
        },
        role_id: {
          type: Sequelize.UUID,
          references: {model: 'roles', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          allowNull: false,
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
    await queryInterface.dropTable('users_roles');
  }
};

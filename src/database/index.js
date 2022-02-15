import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import User from '../models/User';
import Role from '../models/Role';
import Permission from '../models/Permission';
import PermissionRole from '../models/PermissionRole';
import UserRole from '../models/UserRole'
class Database {

  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);
    User.init(this.connection)
    Permission.init(this.connection)
    Role.init(this.connection)
    PermissionRole.init(this.connection)
    UserRole.init(this.connection)

    User.associate(this.connection.models)
    Permission.associate(this.connection.models)
    Role.associate(this.connection.models)
    PermissionRole.associate(this.connection.models)
    UserRole.associate(this.connection.models)
  }
}

export default new Database();
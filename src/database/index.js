import Sequelize from 'sequelize';
import dbConfig from '../config/database';

import User from '../models/User';

class Database {

  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);
    User.init(this.connection)
  }
}

export default new Database();
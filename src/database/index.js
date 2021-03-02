import Sequelize from 'sequelize';


import databaseConfig from '../config/database';

import User from '../app/models/User';
import Parcela from '../app/models/Parcela';
import Grupo from '../app/models/Grupo';
import File from '../app/models/File';
import Comprovante from '../app/models/Comprovante';


const models = [User, Parcela, Grupo, File, Comprovante];

class Database {
  constructor() {
    this.init();
 
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();

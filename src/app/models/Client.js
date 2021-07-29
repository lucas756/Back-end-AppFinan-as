import Sequelize, { Model } from 'sequelize';

class Client extends Model {
  static init(sequelize) {
    super.init({
      barbeiro_id: Sequelize.INTEGER,
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      numero: Sequelize.STRING,
    }, {
      sequelize,
    });

    return this;
  }
}

export default Client;

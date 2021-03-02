import Sequelize, { Model } from 'sequelize';

class Grupo extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      user_id: Sequelize.INTEGER,
    }, {
      sequelize,
    });

    return this;
  }
}

export default Grupo;

import Sequelize, { Model } from 'sequelize';

class Services extends Model {
  static init(sequelize) {
    super.init({
      barbeiro_id: Sequelize.INTEGER,
      preço: Sequelize.STRING,
      Tipo: Sequelize.STRING,
    }, {
      sequelize,
    });

    return this;
  }
  
}

export default Services;

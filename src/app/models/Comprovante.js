import Sequelize, { Model } from 'sequelize';

class Comprovante extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      user_id: Sequelize.INTEGER,
      parcelas_id: Sequelize.INTEGER,
      id_imagem: Sequelize.INTEGER,
    }, {
      sequelize,
    });

    return this;
  }
}

export default Comprovante;

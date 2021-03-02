import Sequelize, { Model } from 'sequelize';

class Parcela extends Model {
  static init(sequelize) {
    super.init({
      vencimento: Sequelize.DATE,
      valor: Sequelize.FLOAT,
      juros: Sequelize.FLOAT,
      status: Sequelize.STRING,
      user_id: Sequelize.INTEGER,
      grupo_id: Sequelize.INTEGER,
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${ process.env.APP_URL }/files/${ this.path }`;
        },
      },
    }, {
      sequelize,
    });

    return this;
  }
}

export default Parcela;

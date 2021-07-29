import Sequelize, { Model } from 'sequelize';

class Schedules extends Model {
  static init(sequelize) {
    super.init({
      barbeiro_id: Sequelize.INTEGER,
      service_id: Sequelize.INTEGER,
      client_id: Sequelize.INTEGER,
      status: Sequelize.STRING,
      date_schedule: Sequelize.STRING,
    }, {
      sequelize,
    });

    return this;
  }
  static associate(models) {
    this.belongsTo(models.Services, { foreignKey: 'client_id', as: 'service' });
  }
}

export default Schedules;

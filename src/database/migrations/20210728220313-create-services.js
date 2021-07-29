module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('services', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    barbeiro_id: {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    },
    preço: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    Tipo: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: queryInterface => queryInterface.dropTable('services'),
};

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('parcelas', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    vencimento: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    valor: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    juros: {
      type: Sequelize.FLOAT,
      allowNull: true,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'Em aberto',
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    },
    grupo_id: {
      type: Sequelize.INTEGER,
      references: { model: 'grupo_parcelas', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
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

  down: queryInterface => queryInterface.dropTable('parcelas'),
};

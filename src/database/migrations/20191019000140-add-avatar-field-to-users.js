
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn(
    'comprovantes',
    'id_imagem',
    {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    },
  ),

  down: queryInterface => queryInterface.removeColumn('users', 'avatar_id'),
};

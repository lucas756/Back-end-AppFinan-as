require('dotenv/config');

module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'root',
  database: 'barbearia',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

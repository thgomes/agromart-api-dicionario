export const up = (queryInterface, Sequelize) => queryInterface.createTable('csas', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  urlBase: {
    allowNull: false,
    type: Sequelize.STRING(200),
  },
  responsavelCSA: {
    allowNull: false,
    type: Sequelize.STRING(200),
  },
  emailCSA: {
    allowNull: false,
    type: Sequelize.STRING(200),
  },
  nomeCSA: {
    allowNull: false,
    type: Sequelize.STRING(200),
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  deletedAt: {
    allowNull: true,
    type: Sequelize.DATE,
  },
});

export const down = (queryInterface) => queryInterface.dropTable('csas');

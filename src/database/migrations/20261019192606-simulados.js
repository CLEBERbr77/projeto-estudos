module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("simulados", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      dataRealizacao: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: true,
      },
      quantidadedeQuestoes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      observacoes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("simulados");
  },
};

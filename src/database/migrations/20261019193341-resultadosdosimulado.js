module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("resultadodossimulados", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      simulado_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "simulados", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      disciplina_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "disciplinas", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      questoesTotal: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      quatidadeAcertos: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      questoesErradas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("resultadodossimulados");
  },
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tarefas", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      disciplina_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "disciplinas", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      conteudo_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "conteudos", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      prazo: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: 0,
      },
      status: {
        type: Sequelize.ENUM("active", "inactive"),
        allowNull: false,
        defaultValue: "active",
      },
      prioridade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tarefas", "status");
  },
};

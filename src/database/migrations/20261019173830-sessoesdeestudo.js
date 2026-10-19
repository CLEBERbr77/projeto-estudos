module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("sessoesdeestudo", {
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
      inicioEm: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      fimEm: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      duracaoSegundos: {
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
    return queryInterface.dropTable("conteudos", "status");
  },
};

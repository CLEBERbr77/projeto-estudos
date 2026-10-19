module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("revisoes", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      conteudo_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "conteudos", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      dataAgendada: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: true,
      },
      dataRealizada: {
        type: Sequelize.DATE,
        allowNull: false,
        unique: true,
      },
      status: {
        type: Sequelize.ENUM("active", "inactive"),
        allowNull: false,
        defaultValue: "active",
      },
      observacoes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("revisoes", "status");
  },
};

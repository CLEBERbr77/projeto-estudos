const { Model, DataTypes } = require("sequelize");

class Tarefa extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        descricao: DataTypes.STRING,
        status: DataTypes.ENUM("active", "inactive"),
        titulo: DataTypes.STRING,
        prioridade: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "tarefas",
        timestamps: true,
        underscored: true,
      },
    );
  }
  static associate(models) {
    this.belongsTo(models.disciplina, {
      foreignKey: "disciplina_Id",
      as: "disciplina",
    });
    this.belongsTo(models.conteudo, {
      foreignKey: "conteudo_Id",
      as: "conteudo",
    });
  }
}

module.exports = Tarefa;

const { Model, DataTypes } = require("sequelize");

class Simulado extends Model {
  static init(sequelize) {
    super.init(
      {
        observacoes: DataTypes.STRING,
        titulo: DataTypes.STRING,
        dataRealizacao: DataTypes.DATE,
        quantidadedeQuestoes: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: "simulados",
        timestamps: true,
        underscored: true,
      },
    );
  }
}

module.exports = Simulado;

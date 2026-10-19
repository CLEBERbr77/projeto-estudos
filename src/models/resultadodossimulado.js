const { Model, DataTypes } = require("sequelize");

class ResultadoDosSimulado extends Model {
  static init(sequelize) {
    super.init(
      {
        observacoes: DataTypes.STRING,
        titulo: DataTypes.STRING,
        questoesTotal: DataTypes.INTEGER,
        quatidadeAcertos: DataTypes.INTEGER,
        questoesErradas: DataTypes.INTEGER,
      },
      {
        sequelize,
        tableName: "resultadodossimulados",
        timestamps: true,
        underscored: true,
      },
    );
  }
}

module.exports = ResultadoDosSimulado;

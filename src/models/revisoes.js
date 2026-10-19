const { Model, DataTypes } = require("sequelize");

class revisoes extends Model {
  static init(sequelize) {
    super.init(
      {
        observacoes: DataTypes.STRING,
        status: DataTypes.ENUM("active", "inactive"),
      },
      {
        sequelize,
        tableName: "revisoes",
        timestamps: true,
        underscored: true,
      },
    );
  }
  static associate(models) {
    this.belongsTo(models.conteudo, {
      foreignKey: "conteudo_Id",
      as: "conteudo",
    });
  }
}

module.exports = revisoes;

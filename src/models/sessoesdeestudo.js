const { Model, DataTypes } = require("sequelize");

class Contact extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        observascoes: DataTypes.STRING,
        status: DataTypes.ENUM("active", "inactive"),
      },
      {
        sequelize,
        tableName: "conteudos",
        timestamps: true,
        underscored: true,
      },
    );
  }

  static associate(models) {
    // Relação com a disciplina
    this.belongsTo(models.disciplina, {
      foreignKey: "disciplina_Id",
      as: "disciplina", // Singular, pois cada sessão pertence a uma disciplina
    });

    // Relação com o conteúdo
    this.belongsTo(models.conteudo, {
      foreignKey: "conteudo_Id",
      as: "conteudo", // Singular, pois cada sessão pertence a um conteúdo específico
    });
  }
}

module.exports = Contact;

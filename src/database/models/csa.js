import { DataTypes, Model } from "sequelize";

export default function (sequelize) {
  class Csa extends Model {
    static associate(models) {}
  }

  Csa.init(
    {
      nomeCSA: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      responsavelCSA: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      emailCSA: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      urlBase: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    },
    {
      modelName: "csas",
      sequelize,
    }
  );

  return Csa;
}

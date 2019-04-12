export default function(sequelize, DataTypes) {
  const Repo = sequelize.define(
    'Repo',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      repoId: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      desc: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false
      },
      found: {
        type: DataTypes.INTEGER(4),
        allowNull: false,
        defaultValue: '1'
      },
      tags: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      tableName: 'Repo'
    }
  );

  return Repo;
}
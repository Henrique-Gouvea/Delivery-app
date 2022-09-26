module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: "users",
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Sale, { foreignKey: "user_id", as: "userSale" });
    User.hasMany(models.Sale, { foreignKey: "seller_id", as: "saleSeller" });
  };

  return User;
};

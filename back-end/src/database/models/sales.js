module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "Sale",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.STRING,
        foreignKey: true,
      },
      seller_id: {
        type: DataTypes.STRING,
        foreignKey: true,
      },
      total_price: {
        type: DataTypes.DECIMAL,
      },
      delivery_address: {
        type: DataTypes.STRING,
      },
      delivery_number: {
        type: DataTypes.STRING,
      },
      sale_date: {
        type: DataTypes.DATETIME,
      },
      status: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "Sales",
    }
  );

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: "user_Id", as: "sale" });
    Sale.belongsTo(models.User, { foreignKey: "seller_id", as: "sale" });
  };

  return Sale;
};

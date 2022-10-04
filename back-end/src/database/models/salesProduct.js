module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define(
    "SalesProduct",
    {
      sale_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false, tableName: "sales_products" }
  );

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: "product",
      through: SalesProduct,
      foreignKey: "sale_id",
      otherKey: "product_id",
    });
    models.Product.belongsToMany(models.Sale, {
      as: "sale",
      through: SalesProduct,
      foreignKey: "product_id",
      otherKey: "sale_id",
    });
  };

  return SalesProduct;
};

module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define(
    "SalesProduct",
    {
      sale_Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
      },
      quantity_id: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false },
  );

  SalesProduct.associate = (models) => {
    models.SalesProduct.belongsToMany(models.Product, {
      as: "products",
      through: SalesProduct,
      foreignKey: "product_id",
      otherKey: "sale_Id",
    });
    models.Category.belongsToMany(models.Sale, {
      as: "sales",
      through: SalesProduct,
      foreignKey: "sale_id",
      otherKey: "product_id",
    });
  };

  return SalesProduct;
};

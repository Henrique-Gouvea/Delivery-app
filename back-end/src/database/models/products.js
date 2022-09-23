module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.DECIMAL,
      },
      url_image: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: "products",
    }
  );

  return Product;
};

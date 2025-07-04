module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.TEXT },
    quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
  });

  Product.associate = (models) => {
    Product.belongsToMany(models.Category, {
      through: "ProductCategories",
      foreignKey: "productId",
    });
  };

  return Product;
};

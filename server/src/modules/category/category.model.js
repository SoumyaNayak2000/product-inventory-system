module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    name: { type: DataTypes.STRING, unique: true },
  });

  Category.associate = (models) => {
    Category.belongsToMany(models.Product, {
      through: "ProductCategories",
      foreignKey: "categoryId",
    });
  };

  return Category;
};

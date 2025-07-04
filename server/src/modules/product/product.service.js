const db = require('../../sequelize');
const { Product, Category } = db;

exports.createProduct = async (data) => {
  const product = await Product.create(data);
  await product.setCategories(data.categoryIds);
  return product;
};

exports.getProducts = async (filter, page, limit) => {
  const offset = (page - 1) * limit;
  const where = filter;
  const result = await Product.findAndCountAll({
    where,
    include: [Category],
    limit,
    offset,
    order: [['createdAt', 'DESC']],
  });
  return result;
};

exports.deleteProduct = async (id) => {
  return await Product.destroy({ where: { id } });
};

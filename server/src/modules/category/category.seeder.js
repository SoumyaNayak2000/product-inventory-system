const db = require('../../sequelize.js');

const seedCategories = async () => {
  const categories = ['Electronics', 'Books', 'Clothing', 'Furniture'];
  for (const name of categories) {
    await db.Category.findOrCreate({ where: { name } });
  }
  console.log("Categories seeded");
};

seedCategories();

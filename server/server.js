const app = require('./app');
const db = require('./src/sequelize');

const PORT = process.env.PORT || 5000;

db.sequelize.sync({ alter: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});

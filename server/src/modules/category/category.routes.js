const router = require('express').Router({ strict: false });
const db = require('../../sequelize');

router.get('/', async (req, res) => {
  try {
    console.log("category get called"); // ← this should show
    const categories = await db.Category.findAll();
    res.json(categories);
  } catch (err) {
    console.error("DB Error:", err);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name } = req.body;

    // Validate
    if (!name || name.trim() === '') {
      return res.status(400).json({ error: 'Category name is required' });
    }

    // Check for duplicate
    const existing = await db.Category.findOne({ where: { name } });
    if (existing) {
      return res.status(400).json({ error: 'Category already exists' });
    }

    // Create
    const category = await db.Category.create({ name: name.trim() });

    res.status(201).json({
      message: 'Category created successfully',
      category,
    });
  } catch (err) {
    console.error('Error creating category:', err);
    res.status(500).json({ error: 'Server error while creating category' });
  }
});

module.exports = router;

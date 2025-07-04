const productService = require('./product.service');

exports.addProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.status(201).json({ message: "Product added", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProductList = async (req, res) => {
  const { page = 1, limit = 5 } = req.query;
  try {
    const result = await productService.getProducts({}, +page, +limit);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await productService.deleteProduct(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

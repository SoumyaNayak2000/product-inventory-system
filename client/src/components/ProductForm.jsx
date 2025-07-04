import React, { useEffect, useState } from "react";
import { addProduct, getCategories, createCategory } from "../api/productApi";
import Select from "react-select";
import styles from "./ProductForm.module.css"; 

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    quantity: 0,
    categoryIds: [],
  });

  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);

  // Fetch categories
  const fetchCategories = async () => {
    const res = await getCategories();
    setCategories(res.data.map((cat) => ({ label: cat.name, value: cat.id })));
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Submit product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        categoryIds: formData.categoryIds.map((c) => c.value),
      };
      await addProduct(payload);
      alert(" Product added!");
      setFormData({ name: "", description: "", quantity: 0, categoryIds: [] });
    } catch (err) {
      alert("❌ " + err.response?.data?.error || "Failed to add product");
    }
  };

  // Create new category
  const handleAddCategory = async () => {
    if (!newCategory.trim()) return alert("Category name is required");
    try {
      await createCategory(newCategory);
      alert("Category added");
      setNewCategory("");
      setShowNewCategoryInput(false);
      fetchCategories();
    } catch (err) {
      alert("❌ " + err.response?.data?.error || "Failed to add category");
    }
  };

  return (
  <form className={styles.container} onSubmit={handleSubmit}>
      <h2>Add Product</h2>

      <input
        placeholder="Name"
        value={formData.name}
        required
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />

      <input
        type="number"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
      />

      <label>Categories:</label>
      <div className={styles.selectWrapper}>
        <Select
          isMulti
          options={categories}
          value={formData.categoryIds}
          onChange={(selected) => setFormData({ ...formData, categoryIds: selected })}
        />
      </div>

      {!showNewCategoryInput && (
        <button type="button" className={styles.addCategory} onClick={() => setShowNewCategoryInput(true)}>
          + Add New Category
        </button>
      )}

      {showNewCategoryInput && (
        <div>
          <input
            type="text"
            placeholder="New category name"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button type="button" onClick={handleAddCategory}>
            Save
          </button>
          <button type="button" onClick={() => setShowNewCategoryInput(false)}>
            Cancel
          </button>
        </div>
      )}

      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;

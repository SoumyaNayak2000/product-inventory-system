import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct, getCategories } from "../api/productApi";
import CategoryFilter from "./CategoryFilter";
import Pagination from "./Pagination";
import styles from "./ProductList.module.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async () => {
    const categoryIds = selectedCategories.map((c) => c.value).join(",");
    const res = await getProducts({ page, search, categories: categoryIds });
    setProducts(res.data.rows || []);
    setTotalPages(Math.ceil(res.data.count / 5)); // assuming 5 per page
  };

  useEffect(() => {
    fetchProducts();
  }, [page, search, selectedCategories]);

  const handleDelete = async (id) => {
    if (confirm("Are you sure?")) {
      await deleteProduct(id);
      fetchProducts();
    }
  };

  return (
     <div className={styles.container}>
      <h2>Product List</h2>
      <input
        placeholder="Search by name..."
        value={search}
        onChange={(e) => {
          setPage(1);
          setSearch(e.target.value);
        }}
      />
      <CategoryFilter
        selected={selectedCategories}
        setSelected={setSelectedCategories}
      />
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <strong>{p.name}</strong> - {p.description} - Qty: {p.quantity}
            <br />
            Categories:{" "}
            {p.Categories.map((c) => (
              <span key={c.id} className={styles.categoryTag}>
                {c.name}
              </span>
            ))}
            <br />
            <button onClick={() => handleDelete(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default ProductList;

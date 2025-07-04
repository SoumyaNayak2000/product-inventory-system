import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <nav className={styles.navbar}>
        <Link className={styles.navlink} to="/">
          Product List
        </Link>
        <Link className={styles.navlink} to="/add">
          Add Product
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;

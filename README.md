# 📦 Product Inventory System (MERN + MySQL)

A fullstack product inventory management application built using:

- 🔧 **Node.js + Express.js** for backend
- ⚛️ **React + Vite** for frontend
- 💾 **MySQL + Sequelize** as the database
- 🌐 **REST API** architecture
- 🎯 Features category filter, pagination, search, and dynamic category addition

---

## ✨ Features

- ✅ Add, list, and delete products
- ✅ Assign multiple categories to each product
- ✅ Filter products by multiple categories
- ✅ Search products by name
- ✅ Paginated product listing
- ✅ Add new categories directly from product form
- ✅ React-select integration for multi-category selection

---

## 🛠 Tech Stack

| Layer     | Tech                    |
|-----------|-------------------------|
| Frontend  | React.js, Vite, React-Select |
| Backend   | Node.js, Express.js     |
| Database  | MySQL + Sequelize ORM   |
| API Style | REST                    |
| Styling   | CSS Modules             |

---

## 🚀 Getting Started

### 🖥️ Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/SoumyaNayak2000/product-inventory-system.git
   cd product-inventory-system/server
2. **Install dependencies**
     ```bash
        npm install
3. **Configure environment variables**
    ```bash
           DB_HOST=localhost
         DB_NAME=inventory_db
         DB_USER=root
         DB_PASS=your_password
         PORT=5000
4. **Start MySQL (via XAMPP or other tools)**
5. Open PHPMyAdmin or MySQL Workbench
6. Create a new database named:
  ```bash
   nginx
7. **Run the backend)**
   ```bash
   npm run dev
8. **Folder Structure**
```bash
server/
├── src/
│   ├── config/              # DB configuration
│   ├── modules/
│   │   ├── product/
│   │   └── category/
│   ├── sequelize.js         # Sequelize instance + associations
│   └── app.js               # Express setup
├── server.js                # Server entry point
└── .env
```bash
client/
├── src/
│   ├── components/
│   │   ├── ProductForm.jsx
│   │   ├── ProductList.jsx
│   │   ├── CategoryFilter.jsx
│   │   └── Pagination.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── AddProduct.jsx
│   ├── api/
│   │   └── productApi.js
│   ├── App.jsx
│   └── main.jsx

<p align="center">
  <img src="https://github.com/SoumyaNayak2000/product-inventory-system/blob/main/assets/localhost_5173_.png" alt="Product Inventory System Banner" width="100%" />
</p>
<p align="center">
  <img src="https://github.com/SoumyaNayak2000/product-inventory-system/blob/main/assets/localhost_5173_add.png" alt="Product Inventory System Banner" width="100%" />
</p>

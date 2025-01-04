// script.js

document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("productList");
    const productForm = document.getElementById("productForm");
    const totalProducts = document.getElementById("totalProducts");
    const lowStockAlerts = document.getElementById("lowStockAlerts");
  
    const supplierList = document.getElementById("supplierList");
    const supplierForm = document.getElementById("supplierForm");
  
    const notifications = document.getElementById("notificationList");
  
    let products = [];
    let suppliers = [];
  
    // Handle product form submission
    productForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("productName").value;
      const stock = parseInt(document.getElementById("productStock").value, 10);
  
      if (name && stock >= 0) {
        products.push({ name, stock });
        updateProductList();
        updateMetrics();
        document.getElementById("productName").value = "";
        document.getElementById("productStock").value = "";
      }
    });
  
    // Update product list
    function updateProductList() {
      productList.innerHTML = products
        .map((product) => <li>${product.name} - Stock: ${product.stock}</li>)
        .join("");
    }
  
    // Update dashboard metrics
    function updateMetrics() {
      totalProducts.textContent = products.length;
      const lowStock = products.filter((product) => product.stock < 10).length;
      lowStockAlerts.textContent = lowStock;
  
      notifications.innerHTML = lowStock
        ? <p>${lowStock} products are running low on stock.</p>
        : "<p>No notifications yet.</p>";
    }
  
    // Handle supplier form submission
    supplierForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("supplierName").value;
      const email = document.getElementById("supplierEmail").value;
  
      if (name && email) {
        suppliers.push({ name, email });
        updateSupplierList();
        document.getElementById("supplierName").value = "";
        document.getElementById("supplierEmail").value = "";
      }
    });
  
    // Update supplier list
    function updateSupplierList() {
      supplierList.innerHTML = suppliers
        .map((supplier) => <li>${supplier.name} - ${supplier.email}</li>)
        .join("");
    }
  });
  
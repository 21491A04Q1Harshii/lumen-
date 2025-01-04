
// References to elements
const productForm = document.getElementById('productForm');
const productList = document.getElementById('productList');
const totalProducts = document.getElementById('totalProducts');
const lowStockAlerts = document.getElementById('lowStockAlerts');

const supplierForm = document.getElementById('supplierForm');
const supplierList = document.getElementById('supplierList');

// Products data
const products = [];

// Suppliers data
const suppliers = [];

// Add Product
productForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('productName').value;
  const category = document.getElementById('productCategory').value;
  const stock = parseInt(document.getElementById('productStock').value, 10);
  const reorderPoint = parseInt(document.getElementById('reorderPoint').value, 10);

  const product = { name, category, stock, reorderPoint };
  products.push(product);

  updateProductList();
  updateDashboard();
});

// Add Supplier
supplierForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('supplierName').value;
  const email = document.getElementById('supplierEmail').value;

  const supplier = { name, email };
  suppliers.push(supplier);

  updateSupplierList();
});

// Update Product List
function updateProductList() {
  productList.innerHTML = '';
  products.forEach((product) => {
    const li = document.createElement('li');
    li.textContent = ${product.name} (Category: ${product.category}, Stock: ${product.stock});
    productList.appendChild(li);
  });
}

// Update Supplier List
function updateSupplierList() {
  supplierList.innerHTML = '';
  suppliers.forEach((supplier) => {
    const li = document.createElement('li');
    li.textContent = ${supplier.name} (Email: ${supplier.email});
    supplierList.appendChild(li);
  });
}

// Update Dashboard Metrics
function updateDashboard() {
  totalProducts.textContent = products.length;
  const lowStockCount = products.filter((p) => p.stock < p.reorderPoint).length;
  lowStockAlerts.textContent = lowStockCount;
}
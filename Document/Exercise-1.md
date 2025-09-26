# 🧩 Practice Project: Product Inventory System
# ✅ Goal

Build a small system that manages an array of products. You will write multiple functions to:

- Group products by brand

- Calculate total inventory value

- Get products in a specific price range

- List all unique brands

- Filter products by brand

## 📦 Sample Data

```JS
const products = [
  { id: 1, name: "Phone", brand: "Apple", price: 1000, quantity: 5 },
  { id: 2, name: "Laptop", brand: "Dell", price: 1200, quantity: 3 },
  { id: 3, name: "Tablet", brand: "Apple", price: 800, quantity: 4 },
  { id: 4, name: "Monitor", brand: "Samsung", price: 600, quantity: 6 },
  { id: 5, name: "Keyboard", brand: "Logitech", price: 100, quantity: 10 },
  { id: 6, name: "Mouse", brand: "Logitech", price: 50, quantity: 20 },
];
```

# ✳️ FUNCTION 1: Group Products by Brand
## Function name: groupByBrand(products)

### 📌 Requirements:

- Return an object where each key is a brand name

- Each value is an array of products from that brand

### ✅ Example Output:
```js
{
  Apple: [ {...}, {...} ],
  Dell: [ {...} ],
  Samsung: [ {...} ],
  Logitech: [ {...}, {...} ]
}
```

# ✳️ FUNCTION 2: `Get Total Inventory Value`
## Function name: `getInventoryValue(products)`

### 📌 Requirements:

- Return the total value of all products

- Each product's value is price × quantity

### ✅ Example Output:
```js
// For above data: 1000×5 + 1200×3 + ...
// Total value: 5000 + 3600 + 3200 + 3600 + 1000 + 1000 = 17400
getInventoryValue(products); // → 17400
```

# ✳️ FUNCTION 3: Filter Products by Price Range
## Function name: `filterByPriceRange(products, min, max)`

### 📌 Requirements:

- Return products where price is between min and max (inclusive)

### ✅ Example:
```js
filterByPriceRange(products, 100, 800);
```

### ✅ Output:

- Returns products like:

```js
[
  { name: "Tablet", price: 800, ... },
  { name: "Monitor", price: 600, ... },
  { name: "Keyboard", price: 100, ... },
  { name: "Mouse", price: 50, ... }
]
```

# ✳️ FUNCTION 4: Get Unique Brands
## Function name: `getUniqueBrands(products)`

### 📌 Requirements:

- Return an array of all unique brand names

### ✅ Output:

```js
["Apple", "Dell", "Samsung", "Logitech"]
```

# ✳️ FUNCTION 5: Get Products by Brand
## Function name: `getProductsByBrand(products, brandName)`

### 📌 Requirements:

- Return only products from the given brand name

### ✅ Example:
```js
getProductsByBrand(products, "Logitech");
```

### ✅ Output:
```js
[
  { name: "Keyboard", brand: "Logitech", ... },
  { name: "Mouse", brand: "Logitech", ... }
]
```
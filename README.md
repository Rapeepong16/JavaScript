# 🧠 Overview

โปรเจกต์นี้เป็นระบบจัดการสินค้าคงคลัง (Inventory Management System) ด้วยการใช้ JavaScript เพื่อจัดเก็บและประมวลผลข้อมูลสินค้าในรูปแบบ Array ของ Object โดยมีฟังก์ชันหลัก ๆ ที่ช่วยให้สามารถเพิ่ม ลบ อัปเดต และเรียกดูข้อมูลสินค้าได้อย่างง่ายดาย

---

# 📦 Product Data Structure

สินค้าแต่ละชิ้นถูกเก็บเป็น Object มี key ดังนี้:

- `id` (Number) — รหัสสินค้าหรือ ID ที่ไม่ซ้ำกัน
- `name` (String) — ชื่อสินค้า
- `category` (String) — หมวดหมู่สินค้า เช่น Electronics, Stationery
- `quantity` (Number) — จำนวนสินค้าคงคลัง
- `price` (Number) — ราคาสินค้าต่อชิ้น

ตัวอย่างข้อมูลสินค้า:
```js
const products = [
  { id: 1, name: "Laptop", category: "Electronics", quantity: 10, price: 15000 },
  { id: 2, name: "Mouse", category: "Electronics", quantity: 25, price: 500 },
  { id: 3, name: "Notebook", category: "Stationery", quantity: 50, price: 30 },
  { id: 4, name: "Pen", category: "Stationery", quantity: 100, price: 10 },
]; 
``` 



# ⚙️ ฟังก์ชันหลัก (Functions)

---

### 1. addProduct(products, newProduct)

เพิ่มสินค้าใหม่ลงในคลังสินค้า

- ตรวจสอบว่า `id` ของสินค้าใหม่ซ้ำกับสินค้าเดิมหรือไม่
- ถ้าซ้ำ ให้แสดงข้อความ `"Product ID already exists."` และไม่เพิ่มสินค้า
- ถ้าไม่ซ้ำ ให้เพิ่มสินค้าใหม่ลงใน Array

```js
const addProduct = (products, newProduct) => {
  const exists = products.some(product => product.id === newProduct.id);
  if (exists) {
    console.log("Product ID already exists.");
    return;
  }
  products.push(newProduct);
};
``` 


### 2. removeProduct(products, productId)

ลบสินค้าจากคลังโดยใช้ `id`

- หากไม่พบสินค้า ให้แสดงข้อความ `"Product not found."`
- ถ้าพบ ให้ลบสินค้าออกจาก Array


```js
const removeProduct = (products, productId) => {
  const index = products.findIndex(product => product.id === productId);
  if (index === -1) {
    console.log("Product not found.");
    return;
  }
  products.splice(index, 1);
};
``` 


### 3. getInventoryValue(products)

คำนวณมูลค่ารวมของสินค้าคงคลัง

- มูลค่าของสินค้าแต่ละชิ้น = `quantity * price`
- คืนค่ามูลค่ารวมทั้งหมด (Number)

```js
const getInventoryValue = (products) => {
  return products.reduce((total, { quantity, price }) => total + quantity * price, 0);
};
``` 

### 4. getProductsByCategory(products, categoryName)

ค้นหาสินค้าตามหมวดหมู่

- คืนค่า Array ของสินค้าที่อยู่ในหมวดหมู่นั้น

```js
const getProductsByCategory = (products, categoryName) => {
  return products.filter(product => product.category === categoryName);
};
``` 


### 5. updateQuantity(products, productId, newQuantity)

อัปเดตจำนวนสินค้าในคลังตาม `id`

- ถ้าไม่พบสินค้า ให้แสดงข้อความ `"Product not found."`
- ถ้าพบ ให้เปลี่ยน `quantity` เป็น `newQuantity`

```js
const updateQuantity = (products, productId, newQuantity) => {
  const product = products.find(product => product.id === productId);
  if (!product) {
    console.log("Product not found.");
    return;
  }
  product.quantity = newQuantity;
};
``` 

### 🎯 Optional Challenge

### 6. groupProductsByCategory(products)

จัดกลุ่มสินค้าแยกตามหมวดหมู่

- คืนค่าเป็น Object ที่ key คือชื่อหมวดหมู่
- value คือ Array ของสินค้าที่อยู่ในหมวดหมู่นั้น

```js
const groupProductsByCategory = (products) => {
  return products.reduce((grouped, product) => {
    const { category } = product;
    if (!grouped[category]) grouped[category] = [];
    grouped[category].push(product);
    return grouped;
  }, {});
};
``` 


const products = [
  { id: 1, name: "Laptop", category: "Electronics", quantity: 10, price: 15000 },
  { id: 2, name: "Mouse", category: "Electronics", quantity: 25, price: 500 },
  { id: 3, name: "Notebook", category: "Stationery", quantity: 50, price: 30 },
  { id: 4, name: "Pen", category: "Stationery", quantity: 100, price: 10 },
];


function addProduct(products , newProduct){
    // let products = products
    let {id , name , category , quantity , price} = newProduct
    if (typeof id === "number" &&
        typeof name === "string" &&
        typeof category === "string" &&
        typeof quantity === "number" &&
        typeof price === "number"){
            
        if (products.some(product => product.id === id)){
            console.log("Product ID already exists.");
        }else{
            products.push(newProduct);
        }
    }else{
        console.log("Invalid product data types.");
        
    }
}

function getProduct(){
    console.log(products);
    
}

function removeProduct(products , productId){
    const index = products.findIndex(product => product.id === productId);
    if (index === -1) {
        console.log("Product not found.");
        return;
    }
    products.splice(index , 1);
    console.log(`Product with id ${productId} removed.`);
}

function getInventoryValue(products){
   return products.reduce((total , {price , quantity}) => total + price * quantity , 0)
   
}

function updatedQuantity(products ,id , newQuantity){
    const product = products.find((product) => product.id === id)
    if (!product){
        console.log("not found ID Product");
        return;
    }
    product.quantity = newQuantity;
    
}

function groupProductsByCategory(products){
    return products.reduce((groups , product) => {
        let {category} = product
        if (!groups[category]){
            groups[category] = []
        }
        groups[category].push(product)
        return groups
    }, {})
}

// removeProduct(products , 1)
// removeProduct(products , 3)
updatedQuantity(products, 2, 20)
console.log(groupProductsByCategory(products));

// console.log(updated);
// console.log(addProduct(products ,{ id: 4, name: "Keyboard", category: "Electronics", quantity: 15, price: 700 }));
// console.log(getProduct());
// console.log(getInventoryValue(products)); 




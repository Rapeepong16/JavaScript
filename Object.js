//Practice 1: Group by "brand"
const items = [
  { id: 1, name: "Phone", brand: "Apple", price: 1000 },
  { id: 2, name: "Laptop", brand: "Dell", price: 1200 },
  { id: 3, name: "Tablet", brand: "Apple", price: 800 },
  { id: 4, name: "Monitor", brand: "Samsung", price: 600 },
];

function groupBand(items){
    return items.reduce((grouped , item) => {
        let {brand , name} = item
        if (!grouped[brand]){
            grouped[brand] = [];
        }
        grouped[brand].push(name)
        return grouped
    }, {})
}

console.log(groupBand(items));

//Practice 2: Group by "department"
const employees = [
  { name: "Alice", department: "HR" },
  { name: "Bob", department: "Engineering" },
  { name: "Charlie", department: "HR" },
  { name: "David", department: "Engineering" },
  { name: "Eve", department: "Sales" },
];
function groupEmployee(employees){
    return employees.reduce((grouped , employee) => {
        let {department , name} = employee
        if (!grouped[department]){
            grouped[department] = [];
        }
        grouped[department].push(name)
        return grouped
    }, {})
}

console.log(groupEmployee(employees));



//Practice 3: filter by "status" delivered
const orders = [
  { orderId: 101, status: "Pending" },
  { orderId: 102, status: "Shipped" },
  { orderId: 103, status: "Delivered" },
  { orderId: 104, status: "Pending" },
  { orderId: 105, status: "Delivered" },
];

function showStatus(orders , statusToMatch){
    return orders.filter(order =>
    order.status.toLowerCase() === statusToMatch.toLowerCase()
  );
}

console.log(showStatus(orders , "delivered"));

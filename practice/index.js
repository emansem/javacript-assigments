/** @format */

const shoppingList = [
  {
    name: "Shoes",
    quantity: 1,
    price: 20,
  },
  {
    name: "Shoes",
    quantity: 1,
    price: 20,
  },
];

function addNewProduct(name, quantity, price) {
  const newProduct = {
    name: name,
    quantity: quantity,
    price: price,
  };

  shoppingList.push(newProduct);
}

addNewProduct("car", 4, 2000);

console.log("updated shopping list", shoppingList);

//Task 3: Calculate Total Quantity
// Write a Method: Write a method to calculate the total quantity of items in the shoppingList.

//Task 4: Add to Cart
// Write a Method: Write a method to add items to a cart. This cart should be a separate array where selected items for purchase are stored.
const cart = [
  {
    prodId: "bag",
    prodQty: 3,
    prodPrice: 3000,
  },
  {
    prodId: "shoes",
    prodQty: 1,
    prodPrice: 1500,
  },
  {
    prodId: "shoes",
    prodQty: 1,
    prodPrice: 1500,
  },
];

function addtoCart(prodId, quantity, price) {
  let matchProduct = cart.find((item) => item.prodId === prodId);

  if (matchProduct) {
    matchProduct.prodQty += quantity;
    matchProduct.prodPrice += price; // Update quantity if product already exists
  } else {
    // Add new product to cart if not already present
    const product = shoppingList.find((item) => item.name === prodId);
    if (product) {
      cart.push({
        prodId: prodId,
        prodQty: quantity,
        prodPrice: product.price * quantity,
      });
    }
  }

  console.log("Updated Cart:", cart);
}

addtoCart("shoes", 3, 900);
addtoCart("shoes", 3, 900);

let totalQty = 0;
cart.forEach((item) => {
  totalQty += item.prodPrice;
});
console.log(totalQty);

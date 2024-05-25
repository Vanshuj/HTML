// script.js
// Assuming you have an array of cart items
const cartItems = [
    { name: 'Product 1', price: 10, quantity: 2 },
    { name: 'Product 2', price: 15, quantity: 1 },
    { name: 'Product 3', price: 20, quantity: 3 }
  ];
  
  // Get the cart table body element
  const cartTableBody = document.getElementById('cart-table-body');
  
  // Get the total price element
  const totalPriceElement = document.getElementById('total-price');
  
  // Function to calculate the total price
  function calculateTotalPrice() {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  }
  
  // Function to render cart items
  function renderCartItems() {
    cartTableBody.innerHTML = '';
    cartItems.forEach((item, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${item.name}</td>
        <td>$${item.price}</td>
        <td>${item.quantity}</td>
        <td>$${item.price * item.quantity}</td>
        <td><button onclick="removeItem(${index})">Remove</button></td>
      `;
      cartTableBody.appendChild(row);
    });
  
    const totalPrice = calculateTotalPrice();
    totalPriceElement.textContent = `$${totalPrice}`;
  }
  
  // Function to remove an item from the cart
  function removeItem(index) {
    cartItems.splice(index, 1);
    renderCartItems();
  }
  
  // Initial render of cart items
  renderCartItems();
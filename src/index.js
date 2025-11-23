const userShoppingCart = [];
let cartTotal = 0
const cartContainer = document.getElementById("cart-container");

document.addEventListener("click", function(e) {
  if (e.target.dataset.menuitem) {
    addMenuItemToCart(e.target.dataset.menuitem);
  }
});

function addMenuItemToCart(menuItem) {
  switch (menuItem) {
    case "Pizza":
      userShoppingCart.push(menuItem);
      cartTotal += 14
      break;
    case "Hamburger":
      userShoppingCart.push(menuItem);
      cartTotal += 12
      break;
    case "Beer":
      userShoppingCart.push(menuItem);
      cartTotal += 12
      break;

    default:
      break;
  }
  renderCart();
}

function renderCart() {
  let newHtml = "";
  let totalHtml = `
      <li class="cart-item total">
        <span>Total Price:</span>
        <span>$${cartTotal}</span>
      </li>
  `;

  userShoppingCart.map(function(menuItemAdded) {
    let menuItemPrice = 
      menuItemAdded === 'Pizza' ? 14 : 12
      
    newHtml += `
      <li class="cart-item">
        <span>${menuItemAdded}</span>
        <span>$${menuItemPrice}</span>
      </li>

    `;
  });

  cartContainer.innerHTML = newHtml;
  cartContainer.innerHTML += totalHtml;
}

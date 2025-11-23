let userShoppingCart = [];
let cartTotal = 0
const cartContainer = document.getElementById("cart-container");

document.addEventListener("click", function(e) {
  if (e.target.dataset.menuitem) {
    addMenuItemToCart(e.target.dataset.menuitem);
  } else if (e.target.id === 'remove-item') {
    removeMenuItem(e.target.dataset.uuid)
  }

});

function addMenuItemToCart(cartItem) {
  let item = {
    "menuItem": cartItem,
    "uid": crypto.randomUUID()
  }

  switch (cartItem) {
    case "Pizza":
      userShoppingCart.push(item);
      cartTotal += 14
      break;
    case "Hamburger":
      userShoppingCart.push(item);
      cartTotal += 12
      break;
    case "Beer":
      userShoppingCart.push(item);
      cartTotal += 12
      break;

    default:
      break;
  }

  console.log(userShoppingCart)
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
      menuItemAdded.menuItem === 'Pizza' ? 14 : 12

    newHtml += `
      <li class="cart-item">
        <span>${menuItemAdded.menuItem}<button type="button" 
          id="remove-item" 
          data-uuid="${menuItemAdded.uid}">remove</button></span>
        <span>$${menuItemPrice}</span>
      </li>

    `;
  });

  cartContainer.innerHTML = newHtml;
  cartContainer.innerHTML += totalHtml;
}

function removeMenuItem(buttonUuid) {
  userShoppingCart = userShoppingCart.filter(item => item.uid !== buttonUuid)
  renderCart()
}

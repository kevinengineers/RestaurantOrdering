let userShoppingCart = [];
let cartTotal = 0;
let menuPrices = {
  Pizza: 14,
  Hamburger: 12,
  Beer: 12,
};
const cartContainer = document.getElementById("cart-container");

document.addEventListener("click", function(e) {
  if (e.target.dataset.menuitem) {
    addMenuItemToCart(e.target.dataset.menuitem);
  } else if (e.target.id === "remove-item") {
    removeMenuItem(e.target.dataset.uuid);
  } else if (e.target.id === 'submit-btn') {
    alert('complete order')
  }
});

function addMenuItemToCart(cartItem) {
  let item = {
    menuItem: cartItem,
    uid: crypto.randomUUID(),
    price: menuPrices[cartItem],
  };

  switch (cartItem) {
    case "Pizza":
      userShoppingCart.push(item);
      cartTotal += item.price;
      break;
    case "Hamburger":
      userShoppingCart.push(item);
      cartTotal += item.price;
      break;
    case "Beer":
      userShoppingCart.push(item);
      cartTotal += item.price;
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
    newHtml += `
      <li class="cart-item">
        <span>${menuItemAdded.menuItem}<button type="button" 
          id="remove-item" 
          data-uuid="${menuItemAdded.uid}">remove</button></span>
        <span>$${menuItemAdded.price}</span>
      </li>

    `;
  });

  cartContainer.innerHTML = newHtml;
  cartContainer.innerHTML += totalHtml;
}

function removeMenuItem(buttonUuid) {
  userShoppingCart = userShoppingCart.filter(function(item) {
    if (item.uid === buttonUuid) {
      cartTotal -= item.price
    }
    return item.uid !== buttonUuid;
  });
  renderCart();
}

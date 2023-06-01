// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(key) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(key);
  return product;
}

export function getCartCount() {
  const cartItems = getLocalStorage("so-cart");
  if (cartItems) {
    const cartCount = cartItems.length;
    return cartCount;
  } else {
    return 0;
  }
}
export function getCartTotal() {
  const cartItems = getLocalStorage("so-cart");
  let total = 0;
  cartItems.forEach((item) => {
    total += item.FinalPrice;
  });
  return total;
}

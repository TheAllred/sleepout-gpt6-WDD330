import ProductList from "./components/ProductList.svelte";
import MainHeader from "./components/MainHeader.svelte";
import MainFooter from "./components/MainFooter.svelte";
import ShoppingCart from "./components/ShoppingCart.svelte";

new ProductList({
  target: document.querySelector(".products"),
  props: { category: "tents" },
});

new MainHeader({
  target: document.querySelector("#main-header"),
  props: {
    cartCount: 99,
  },
});
new MainFooter({ target: document.querySelector("#main-footer") });

new ShoppingCart({ target: document.querySelector("#shopping-cart") });

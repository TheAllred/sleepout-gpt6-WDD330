import ProductList from "./components/ProductList.svelte";
import MainHeader from "./components/MainHeader.svelte";
import MainFooter from "./components/MainFooter.svelte";

new ProductList({
  target: document.querySelector(".products"),
  props: { category: "tents" },
});

new MainHeader({
  target: document.querySelector("#main-header"),
});

new MainFooter({ target: document.querySelector("#main-footer") });


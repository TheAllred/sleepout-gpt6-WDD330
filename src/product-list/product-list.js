import ProductList from "../js/components/ProductList.svelte";
import MainHeader from "../js/components/MainHeader.svelte";
import MainFooter from "../js/components/MainFooter.svelte";
import { getParam } from "../js/utils.mjs";

const param = getParam("category");
new ProductList({
  target: document.querySelector(".products"),
  props: { category: param },
});

new MainHeader({
  target: document.querySelector("#main-header"),
});

new MainFooter({ target: document.querySelector("#main-footer") });


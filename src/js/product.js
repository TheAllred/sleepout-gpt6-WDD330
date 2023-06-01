import { getParam } from "./utils.mjs";

import { productDetails } from "./productDetails.mjs";

import MainHeader from "./components/MainHeader.svelte";
import MainFooter from "./components/MainFooter.svelte";

const productId = getParam("product");

console.log(productId)

productDetails(productId, ".product-detail");

new MainHeader({
  target: document.querySelector("#main-header"),
  props: {
    cartCount: 99,
  },
});
new MainFooter({ target: document.querySelector("#main-footer") });

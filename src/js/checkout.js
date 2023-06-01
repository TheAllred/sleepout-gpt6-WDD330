import MainHeader from "./components/MainHeader.svelte";
import MainFooter from "./components/MainFooter.svelte";
import checkout from "./components/Checkout.svelte";


new checkout({ target: document.querySelector(".products") });
new MainHeader({
  target: document.querySelector("#main-header"),

});
new MainFooter({ target: document.querySelector("#main-footer") });
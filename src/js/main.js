import MainHeader from "./components/MainHeader.svelte";
import MainFooter from "./components/MainFooter.svelte";


new MainHeader({
  target: document.querySelector("#main-header"),
});

new MainFooter({ target: document.querySelector("#main-footer") });


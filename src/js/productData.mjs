import { addProductToCart } from "./product";

const productData = ''

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export function getData(category = "tents") {
  return fetch(`../json/${category}.json`)
    .then(convertToJson)
    .then((data) => data);
}

export async function findProductById(id) {
  const products = await getData();
  console.log(products)
  return products.find((item) => item.Id === id);
  
}
productDetails(productId, selector){

}

productDetailsTemplate(product){
  return  `
  <h3 id="productName"></h3>
  <h2 class="divider" id="productNameWithoutBrand"></h2>
  <img id="productImage" class="divider" src="" alt="" />
  <p class="product-card__price" id="productFinalPrice"></p>
  <p class="product__color" id="productColorName"></p>
  <p class="product__description" id="productDescriptionHtmlSimple"></p>
  <div class="product-detail__add">

  `
}
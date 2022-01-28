import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";
import './styless.css'

const productList = getProductList(20);

renderGoodsList(productList);
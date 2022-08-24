import { request } from "../api.js";
import ProductList from "../components/ProductList.js";

export default function ProdectListPage({ $target }) {
  const $page = document.createElement('div');
  $page.className = 'ProductListPage';
  $page.innerHTML = '<h1>상품목록</h1>'

  this.render = () => {
    $target.innerHTML = '';
    $target.appendChild($page);
  }

  const fetchProducts = async () => {
    const products = await request('/products');
    productList.setState(products);
  }

  const productList = new ProductList({
    $target: $page,
    initalState: this.state
  });
  
  fetchProducts();
}
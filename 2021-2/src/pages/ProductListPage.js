import { request } from "../api.js";

export default function ProdectListPage({ $target }) {
  const $page = document.createElement('div');
  $page.className = 'ProductListPage';
  $page.innerHTML = '<h1>상품목록</h1>'

  this.render = () => {
    $target.appendChild($page);
  }

  this.setState = (newState) => {
    this.state = newState;
  }

  const fetchProducts = async () => {
    const products = await request('/products');
    this.setState(products);
    console.log(products);
  }

  fetchProducts();
}
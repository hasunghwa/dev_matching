import { request } from "../api.js";
import ProductDetail from "../components/ProductDetail.js";

export default function ProductDetailPage({ $target, productId }) {
  this.state = {
    productId,
    product: null
  };
  
  this.setState = nextState => {
    this.state = nextState;
    this.render();
  }

  const $page = document.createElement('div');
  $page.className = 'ProductDetailPage';

  this.render = () => {
    if (!this.state.product) {
      $target.innerHTML = 'Loading..';
    } else {
      $target.innerHTML = '';
      $target.appendChild($page);      
      $page.innerHTML = `<h1>${this.state.product.name} 상품 정보</h1>`;

      new ProductDetail({
        $target: $page,
        initalState: {
          product: this.state.product,
          selectedOptions: []
        }
      });
    }    
  }

  this.fetchProduct = async () => {
    const { productId } = this.state;
    const product = await request(`/products/${productId}`);
    this.setState({
      ...this.state,
      product
    })
  }

  this.fetchProduct();
}
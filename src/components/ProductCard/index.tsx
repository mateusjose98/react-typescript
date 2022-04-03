import "./styles.css";

import ProductImg from "assets/images/product.png";
import ProductImg2 from "assets/images/product2.jpg";
import ProductPrice from "components/ProductPrice";

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg2} alt="nome" />
      </div>
      <div className="card-bottom-container">
        <h6>Notebook Asus X509JA-BR470T</h6>
        <ProductPrice />
      </div>
    </div>
  );
};

export default ProductCard;

import React from 'react';
import Header from '../../../components/header';
import ProductCard from '../../../components/productCard';
import './style.css';

function Products() {
  return (
    <div>
      <Header />
      <div className="page">
        <div className="divcards">
          <ProductCard
            className="cards"
          />
        </div>
      </div>
    </div>
  );
}
export default Products;

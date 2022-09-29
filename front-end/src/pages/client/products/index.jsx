import React from 'react';
import Header from '../../../components/header';
import ProductCard from '../../../components/productCard';
import './style.css';

function Products() {
  return (
    <div className="page">
      <Header />
      <div className="divcards">
        <ProductCard
          className="cards"
        />
      </div>
    </div>
  );
}
export default Products;

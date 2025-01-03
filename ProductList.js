import React from 'react';

    function ProductList({ products, searchTerm, filterTerm }) {
      const filteredProducts = products.filter((product) => {
        if (filterTerm === 'pris') {
          return product.price >= 100;
        } else if (filterTerm === 'kategori') {
          return product.category === 'Elektronik';
        } else {
          return true;
        }
      });

      return (
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Pris: {product.price} kr</p>
              <img src={product.image} alt={product.name} />
            </li>
          ))}
        </ul>
      );
    }

    export default ProductList;

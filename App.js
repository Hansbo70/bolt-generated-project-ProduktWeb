import React, { useState, useEffect } from 'react';
    import ProductList from './ProductList';

    function App() {
      const [products, setProducts] = useState([]);
      const [searchTerm, setSearchTerm] = useState('');
      const [filterTerm, setFilterTerm] = useState('');

      useEffect(() => {
        fetch('products.json')
          .then(response => response.json())
          .then(data => setProducts(data));
      }, []);

      const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      };

      const handleFilter = (event) => {
        setFilterTerm(event.target.value);
      };

      return (
        <div>
          <h1>Produkt presentation</h1>
          <input type="search" value={searchTerm} onChange={handleSearch} />
          <select value={filterTerm} onChange={handleFilter}>
            <option value="">Alla produkter</option>
            <option value="pris">Pris</option>
            <option value="kategori">Kategori</option>
          </select>
          <ProductList products={products} searchTerm={searchTerm} filterTerm={filterTerm} />
        </div>
      );
    }

    export default App;

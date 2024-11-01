import React, { useState, useEffect } from 'react';

const Listings = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // id, userID, name, price, description, image, category
      const jsonString = '[{"id":1,"userID":1,"name":"Product 1","price":100,"description":"Description 1","image":"image1.jpg","category":"Category 1"},{"id":2,"userID":1,"name":"Product 2","price":200,"description":"Description 2","image":"image2.jpg","category":"Category 2"},{"id":3,"userID":1,"name":"Product 3","price":300,"description":"Description 3","image":"image3.jpg","category":"Category 3"}]';
      const products = JSON.parse(jsonString);
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6 font-sans">
      <h1 className="text-3xl text-center mb-8">Product Listings</h1>
      <ul className="flex flex-wrap justify-around">
        {products.map(product => (
          <li key={product.id} className="border border-gray-300 rounded-lg m-4 p-4 w-80 shadow-lg transition-transform transform hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-2">${product.price}</p>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
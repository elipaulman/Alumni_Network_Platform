import React, { useState, useEffect } from 'react';

const Listings = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      // id, userID, name, price, description, image, category
      const jsonString = '[{"id":1,"userID":1,"name":"Product 1","price":100,"description":"Description 1","image":"image1.jpg","category":"Category 1"},{"id":2,"userID":1,"name":"Product 2","price":200,"description":"Description 2","image":"image2.jpg","category":"Category 2"},{"id":3,"userID":1,"name":"Product 3","price":300,"description":"Description 3","image":"image3.jpg","category":"Category 3"}, {"id":4,"userID":1,"name":"Product 4","price":100,"description":"Description 4","image":"image4.jpg","category":"Category 1"}, {"id":5,"userID":1,"name":"Product 5","price":100,"description":"Description 5","image":"image5.jpg","category":"Category 1"}, {"id":6,"userID":1,"name":"Product 6","price":100,"description":"Description 6","image":"image6.jpg","category":"Category 1"}, {"id":7,"userID":1,"name":"Product 7","price":100,"description":"Description 7","image":"image7.jpg","category":"Category 1"}, {"id":8,"userID":1,"name":"Product 8","price":100,"description":"Description 8","image":"image8.jpg","category":"Category 1"}, {"id":9,"userID":1,"name":"Product 9","price":100,"description":"Description 9","image":"image9.jpg","category":"Category 1"}, {"id":10,"userID":1,"name":"Product 10","price":100,"description":"Description 10","image":"image10.jpg","category":"Category 1"}, {"id":11,"userID":1,"name":"Product 11","price":100,"description":"Description 11","image":"image11.jpg","category":"Category 1"}]';
      const products = JSON.parse(jsonString);
      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-4 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-4xl text-center mb-8 font-bold text-gray-800">Product Listings</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <li key={product.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{product.name}</h2>
              <p className="text-xl text-gray-700 mb-2">${product.price}</p>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
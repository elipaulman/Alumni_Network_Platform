import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import Card from '../components/Card'; // Import the Card component

const Opportunities = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [filteredOpportunities, setFilteredOpportunities] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [artCategoryFilter, setArtCategoryFilter] = useState('');

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const response = await axios.get('http://localhost:5050/db/opportunity/');
        setOpportunities(response.data);
        setFilteredOpportunities(response.data); // Set filtered opportunities immediately after fetching
      } catch (error) {
        console.error('Error fetching opportunities:', error);
      }
    };

    fetchOpportunities();
  }, []);

  useEffect(() => {
    if (opportunities.length > 0) {
      filterOpportunities();
    }
  }, [opportunities, locationFilter, categoryFilter, artCategoryFilter]);

  const filterOpportunities = () => {
    let filtered = opportunities;

    if (!locationFilter && !categoryFilter && !artCategoryFilter) {
      setFilteredOpportunities(opportunities);
      return;
    }

    if (locationFilter) {
      filtered = filtered.filter(opportunity =>
        opportunity.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    if (categoryFilter) {
      filtered = filtered.filter(opportunity =>
        opportunity.category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
    }

    if (artCategoryFilter) {
      filtered = filtered.filter(opportunity =>
        opportunity.artCategory.toLowerCase().includes(artCategoryFilter.toLowerCase())
      );
    }

    setFilteredOpportunities(filtered);
  };

  const handleLocationFilterChange = (e) => {
    setLocationFilter(e.target.value);
  };

  const handleCategoryFilterChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handleArtCategoryFilterChange = (e) => {
    setArtCategoryFilter(e.target.value);
  };

  return (
    <div className="p-4 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-4xl text-center mb-8 font-bold text-gray-800">Browse Opportunities</h1>
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-2 text-gray-700 font-semibold">Filter by Location:</label>
          <input
            type="text"
            value={locationFilter}
            onChange={handleLocationFilterChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter location"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700 font-semibold">Filter by Category:</label>
          <input
            type="text"
            value={categoryFilter}
            onChange={handleCategoryFilterChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter category"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700 font-semibold">Filter by Art Category:</label>
          <input
            type="text"
            value={artCategoryFilter}
            onChange={handleArtCategoryFilterChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter art category"
          />
        </div>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredOpportunities.map(opportunity => (
          <Card key={opportunity._id} data={opportunity} />
        ))}
      </ul>
    </div>
  );
};

export default Opportunities;

import React, { useState, useEffect } from 'react';

const Opportunities = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [filteredOpportunities, setFilteredOpportunities] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [artCategoryFilter, setArtCategoryFilter] = useState('');

  useEffect(() => {
    const fetchOpportunities = async () => {
      const jsonString = '[{"id":1,"userID":1,"name":"Private Art Commission","description":"Create a custom piece of art for a private collector. Open to all styles.","category":"Commission","location":"New York, NY","artCategory":"Watercolor"},{"id":2,"userID":2,"name":"Corporate Art Commission","description":"Design and create artwork for a corporate office. Open to experienced artists.","category":"Commission","location":"Los Angeles, CA","artCategory":"Sculpture"},{"id":3,"userID":3,"name":"Public Art Commission","description":"Develop a public art piece for a new community center. Open to proposals.","category":"Commission","location":"Chicago, IL","artCategory":"Mural"},{"id":4,"userID":4,"name":"Artist Residency Program","description":"Apply for a 3-month artist residency program. Studio space and stipend provided.","category":"Residency","location":"San Francisco, CA","artCategory":"Mixed Media"},{"id":5,"userID":5,"name":"Art Competition","description":"Participate in the annual art competition. Cash prizes for winners.","category":"Competition","location":"Miami, FL","artCategory":"Digital Art"},{"id":6,"userID":6,"name":"Gallery Internship","description":"Intern at a contemporary art gallery. Gain hands-on experience in gallery operations.","category":"Internship","location":"Seattle, WA","artCategory":"Photography"},{"id":7,"userID":7,"name":"Art Fair Participation","description":"Exhibit your work at the upcoming art fair. Open to all artists.","category":"Fair","location":"Austin, TX","artCategory":"Painting"},{"id":8,"userID":8,"name":"Art Grant Application","description":"Apply for an art grant to fund your next project. Open to all disciplines.","category":"Grant","location":"Boston, MA","artCategory":"Installation"},{"id":9,"userID":9,"name":"Art Auction","description":"Submit your artwork for the charity art auction. Proceeds go to local charities.","category":"Auction","location":"Philadelphia, PA","artCategory":"Oil Painting"},{"id":10,"userID":10,"name":"Art Collaboration Project","description":"Collaborate with other artists on a large-scale mural project. Open to all skill levels.","category":"Collaboration","location":"Portland, OR","artCategory":"Chalk Art"}]';
      const opportunities = JSON.parse(jsonString);
      setOpportunities(opportunities);
      setFilteredOpportunities(opportunities);
    };

    fetchOpportunities();
  }, []);

  useEffect(() => {
    filterOpportunities();
  }, [locationFilter, categoryFilter, artCategoryFilter]);

  const filterOpportunities = () => {
    let filtered = opportunities;

    if (locationFilter) {
      filtered = filtered.filter(opportunity => opportunity.location.toLowerCase().includes(locationFilter.toLowerCase()));
    }

    if (categoryFilter) {
      filtered = filtered.filter(opportunity => opportunity.category.toLowerCase().includes(categoryFilter.toLowerCase()));
    }

    if (artCategoryFilter) {
      filtered = filtered.filter(opportunity => opportunity.artCategory.toLowerCase().includes(artCategoryFilter.toLowerCase()));
    }

    setFilteredOpportunities(filtered);
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
            onChange={(e) => setLocationFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter location"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700 font-semibold">Filter by Category:</label>
          <input
            type="text"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter category"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700 font-semibold">Filter by Art Category:</label>
          <input
            type="text"
            value={artCategoryFilter}
            onChange={(e) => setArtCategoryFilter(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter art category"
          />
        </div>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredOpportunities.map(opportunity => (
          <li key={opportunity.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{opportunity.name}</h2>
              <p className="text-gray-500 mb-2">{opportunity.artCategory}</p>
              <p className="text-gray-600 mb-2">{opportunity.description}</p>
              <p className="text-gray-500 mb-2">{opportunity.category}</p>
              <p className="text-gray-400">{opportunity.location}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Opportunities;
import React, { useState, useEffect } from 'react';

const Opportunities = () => {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    const fetchOpportunities = async () => {
      const jsonString = '[{"id":1,"userID":1,"name":"Private Art Commission","description":"Create a custom piece of art for a private collector. Open to all styles.","category":"Commission","location":"New York, NY"},{"id":2,"userID":2,"name":"Corporate Art Commission","description":"Design and create artwork for a corporate office. Open to experienced artists.","category":"Commission","location":"Los Angeles, CA"},{"id":3,"userID":3,"name":"Public Art Commission","description":"Develop a public art piece for a new community center. Open to proposals.","category":"Commission","location":"Chicago, IL"},{"id":4,"userID":4,"name":"Artist Residency Program","description":"Apply for a 3-month artist residency program. Studio space and stipend provided.","category":"Residency","location":"San Francisco, CA"},{"id":5,"userID":5,"name":"Art Competition","description":"Participate in the annual art competition. Cash prizes for winners.","category":"Competition","location":"Miami, FL"},{"id":6,"userID":6,"name":"Gallery Internship","description":"Intern at a contemporary art gallery. Gain hands-on experience in gallery operations.","category":"Internship","location":"Seattle, WA"},{"id":7,"userID":7,"name":"Art Fair Participation","description":"Exhibit your work at the upcoming art fair. Open to all artists.","category":"Fair","location":"Austin, TX"},{"id":8,"userID":8,"name":"Art Grant Application","description":"Apply for an art grant to fund your next project. Open to all disciplines.","category":"Grant","location":"Boston, MA"},{"id":9,"userID":9,"name":"Art Auction","description":"Submit your artwork for the charity art auction. Proceeds go to local charities.","category":"Auction","location":"Philadelphia, PA"},{"id":10,"userID":10,"name":"Art Collaboration Project","description":"Collaborate with other artists on a large-scale mural project. Open to all skill levels.","category":"Collaboration","location":"Portland, OR"}]';
      const opportunities = JSON.parse(jsonString);
      setOpportunities(opportunities);      
    };

    fetchOpportunities();
  }, []);

  return (
    <div className="p-4 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-4xl text-center mb-8 font-bold text-gray-800">Browse Opportunities</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {opportunities.map(opportunity => (
          <li key={opportunity.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">{opportunity.name}</h2>
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
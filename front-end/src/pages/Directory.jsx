import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const AlumniDirectory = () => {
  const [directory, setDirectory] = useState([]);
  const [filteredDirectory, setFilteredDirectory] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [artCategoryFilter, setArtCategoryFilter] = useState('');

  useEffect(() => {
    const fetchDirectory = async () => {
      const jsonString = '[{"id":1,"userID":1,"name":"Emily Chen","description":"Watercolor artist specializing in nature scenes. Available for commissions and collaborations.","category":"Artist","location":"New York, NY","artCategory":"Watercolor"},{"id":2,"userID":2,"name":"Marcus Rodriguez","description":"Experienced sculptor working with metal and stone. Corporate installations and public art.","category":"Artist","location":"Los Angeles, CA","artCategory":"Sculpture"},{"id":3,"userID":3,"name":"Sarah Johnson","description":"Muralist with experience in community art projects. Specializes in large-scale works.","category":"Artist","location":"Chicago, IL","artCategory":"Mural"},{"id":4,"userID":4,"name":"David Park","description":"Mixed media artist and art educator. Currently running community workshops.","category":"Educator","location":"San Francisco, CA","artCategory":"Mixed Media"},{"id":5,"userID":5,"name":"Alex Thompson","description":"Digital artist and animator. Works in game design and interactive installations.","category":"Designer","location":"Miami, FL","artCategory":"Digital Art"},{"id":6,"userID":6,"name":"Lisa Wong","description":"Photography curator and gallery owner. Specializes in contemporary photography.","category":"Curator","location":"Seattle, WA","artCategory":"Photography"},{"id":7,"userID":7,"name":"James Mitchell","description":"Oil painter and art fair organizer. Focuses on abstract expressionism.","category":"Artist","location":"Austin, TX","artCategory":"Painting"},{"id":8,"userID":8,"name":"Maria Garcia","description":"Installation artist and grant writer. Works with sustainable materials.","category":"Artist","location":"Boston, MA","artCategory":"Installation"},{"id":9,"userID":9,"name":"Robert Lee","description":"Traditional oil painter and art instructor. Specializes in portraits.","category":"Educator","location":"Philadelphia, PA","artCategory":"Oil Painting"},{"id":10,"userID":10,"name":"Kate Williams","description":"Public artist and community organizer. Specializes in collaborative projects.","category":"Artist","location":"Portland, OR","artCategory":"Chalk Art"}]';
      const directory = JSON.parse(jsonString);
      setDirectory(directory);
      setFilteredDirectory(directory);
    };

    fetchDirectory();
  }, []);

  useEffect(() => {
    if (directory.length > 0) {
      filterDirectory();
    }
  }, [directory, locationFilter, categoryFilter, artCategoryFilter]);

  const filterDirectory = () => {
    let filtered = directory;

    if (!locationFilter && !categoryFilter && !artCategoryFilter) {
      setFilteredDirectory(directory);
      return;
    }

    if (locationFilter) {
      filtered = filtered.filter(alumni =>
        alumni.location.toLowerCase().includes(locationFilter.toLowerCase())
      );
    }

    if (categoryFilter) {
      filtered = filtered.filter(alumni =>
        alumni.category.toLowerCase().includes(categoryFilter.toLowerCase())
      );
    }

    if (artCategoryFilter) {
      filtered = filtered.filter(alumni =>
        alumni.artCategory.toLowerCase().includes(artCategoryFilter.toLowerCase())
      );
    }

    setFilteredDirectory(filtered);
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
      <h1 className="text-4xl text-center mb-8 font-bold text-gray-800">Browse Alumni Network</h1>
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
          <label className="block mb-2 text-gray-700 font-semibold">Filter by Role:</label>
          <input
            type="text"
            value={categoryFilter}
            onChange={handleCategoryFilterChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter role (Artist, Educator, etc.)"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-700 font-semibold">Filter by Specialty:</label>
          <input
            type="text"
            value={artCategoryFilter}
            onChange={handleArtCategoryFilterChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter art specialty"
          />
        </div>
      </div>
      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDirectory.map(alumni => (
            <Card key={alumni.id} data={alumni} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AlumniDirectory;
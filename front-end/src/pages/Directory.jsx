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
      const jsonString = '[{"id":1,"userID":1,"name":"River Zhao","description":"Traditional Chinese watercolor artist exploring modern themes. Open to collaborations and art exchanges. Currently working on a series about urban nature.","category":"Painter","location":"San Francisco, CA","artCategory":"Watercolor"},{"id":2,"userID":2,"name":"Luna Santiago","description":"Metal sculptor specializing in large-scale outdoor installations. Workshop space available for community projects. Passionate about teaching metalworking.","category":"Sculptor","location":"Los Angeles, CA","artCategory":"Metal Sculpture"},{"id":3,"userID":3,"name":"Sage Blackwood","description":"Street artist and muralist advocating for community art spaces. Experience organizing collaborative mural projects. Available for community workshops.","category":"Muralist","location":"Chicago, IL","artCategory":"Street Art"},{"id":4,"userID":4,"name":"Kai Patel","description":"Experimental artist combining traditional and digital techniques. Hosts monthly mixed media workshops. Looking to connect with other multimedia artists.","category":"Mixed Media","location":"Portland, OR","artCategory":"Experimental"},{"id":5,"userID":5,"name":"Phoenix Wright","description":"Digital illustrator focusing on fantasy and sci-fi themes. Creates concept art and character designs. Interested in game art collaborations.","category":"Digital Artist","location":"Seattle, WA","artCategory":"Digital Illustration"},{"id":6,"userID":6,"name":"Aurora Kim","description":"Documentary photographer capturing local music scene and cultural events. Available for artist portfolio shoots. Interested in exhibition collaborations.","category":"Photographer","location":"Austin, TX","artCategory":"Documentary"},{"id":7,"userID":7,"name":"Rain Nakamura","description":"Abstract expressionist working with oils and acrylics. Studio space available for figure drawing sessions. Seeking artists for group exhibitions.","category":"Painter","location":"New York, NY","artCategory":"Abstract"},{"id":8,"userID":8,"name":"Indigo Ramirez","description":"Eco-artist creating installations from recycled materials. Looking for collaborators for upcoming sustainability project. Workshops available.","category":"Installation Artist","location":"Boston, MA","artCategory":"Environmental Art"},{"id":9,"userID":9,"name":"Storm Winters","description":"Portrait artist specializing in oil painting and charcoal. Taking commission work. Offers portrait drawing classes for all skill levels.","category":"Portrait Artist","location":"Miami, FL","artCategory":"Portraiture"},{"id":10,"userID":10,"name":"Echo Valentine","description":"Ceramic artist exploring functional and sculptural works. Studio space with kiln available for community use. Interested in pottery collaborations.","category":"Ceramicist","location":"Minneapolis, MN","artCategory":"Ceramics"}]';
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
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDirectory.map(alumni => (
          <Card key={alumni.id} data={alumni} />
        ))}
      </ul>
    </div>
  );
};

export default AlumniDirectory;
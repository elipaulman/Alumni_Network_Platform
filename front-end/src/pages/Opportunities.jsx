import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const Opportunities = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [filteredOpportunities, setFilteredOpportunities] = useState([]);
  const [locationFilter, setLocationFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [artCategoryFilter, setArtCategoryFilter] = useState("");
  const [newOpportunity, setNewOpportunity] = useState({
    opportunityName: "",
    description: "",
    location: "",
    category: "",
    artCategory: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    fetchOpportunities();
  }, []);

  useEffect(() => {
    if (opportunities.length > 0) {
      filterOpportunities();
    }
  }, [opportunities, locationFilter, categoryFilter, artCategoryFilter]);

  const fetchOpportunities = async () => {
    try {
      const response = await axios.get("http://localhost:5050/db/opportunity/");
      setOpportunities(response.data);
      setFilteredOpportunities(response.data);
    } catch (error) {
      console.error("Error fetching opportunities:", error);
    }
  };

  const filterOpportunities = () => {
    let filtered = opportunities;

    if (!locationFilter && !categoryFilter && !artCategoryFilter) {
      setFilteredOpportunities(opportunities);
      return;
    }

    if (locationFilter) {
      filtered = filtered.filter((opportunity) =>
        opportunity.location
          .toLowerCase()
          .includes(locationFilter.toLowerCase())
      );
    }

    if (categoryFilter) {
      filtered = filtered.filter((opportunity) =>
        opportunity.category
          .toLowerCase()
          .includes(categoryFilter.toLowerCase())
      );
    }

    if (artCategoryFilter) {
      filtered = filtered.filter((opportunity) =>
        opportunity.artCategory
          .toLowerCase()
          .includes(artCategoryFilter.toLowerCase())
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOpportunity((prevOpportunity) => ({
      ...prevOpportunity,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting new opportunity:", newOpportunity);
    try {
      await axios.post("http://localhost:5050/db/opportunity/", newOpportunity);
      console.log("New opportunity posted successfully");
      setNewOpportunity({
        opportunityName: "",
        description: "",
        location: "",
        category: "",
        artCategory: "",
      });
      setIsFormVisible(false);
      fetchOpportunities();
    } catch (error) {
      console.error("Error posting opportunity:", error.response.data);
    }
  };

  return (
    <div className="p-6 font-sans bg-white min-h-screen">
      <h1 className="text-5xl text-center mb-12 font-extrabold text-gray-800 tracking-wide">
        Browse and Share Opportunities
      </h1>
      <div className="mb-10 text-center">
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="px-8 py-4 bg-gradient-to-r from-[#00BDF2] to-[#00BDF2] text-white rounded-3xl shadow-xl hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-[#00BDF2]"
        >
          {isFormVisible ? "Cancel" : "Share an Opportunity"}
        </button>
      </div>
      {isFormVisible && (
        <form
          onSubmit={handleFormSubmit}
          className="mb-10 bg-white p-8 rounded-3xl shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Opportunity Name:
              </label>
              <input
                type="text"
                name="opportunityName"
                value={newOpportunity.opportunityName}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Location:
              </label>
              <input
                type="text"
                name="location"
                value={newOpportunity.location}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-semibold">
              Description:
            </label>
            <textarea
              name="description"
              value={newOpportunity.description}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Category:
              </label>
              <input
                type="text"
                name="category"
                value={newOpportunity.category}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Art Category:
              </label>
              <input
                type="text"
                name="artCategory"
                value={newOpportunity.artCategory}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                required
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-[#00BDF2] to-teal-500 text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300"
            >
              Submit
            </button>
          </div>
        </form>
      )}
      <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <label className="block mb-2 text-gray-700 font-semibold">
            Filter by Location:
          </label>
          <input
            type="text"
            value={locationFilter}
            onChange={handleLocationFilterChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            placeholder="City, State"
          />
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <label className="block mb-2 text-gray-700 font-semibold">
            Filter by Opportunity Type:
          </label>
          <input
            type="text"
            value={categoryFilter}
            onChange={handleCategoryFilterChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            placeholder="Commission, Residency, etc"
          />
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <label className="block mb-2 text-gray-700 font-semibold">
            Filter by Art Category:
          </label>
          <input
            type="text"
            value={artCategoryFilter}
            onChange={handleArtCategoryFilterChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            placeholder="Painting, Sculpture, etc"
          />
        </div>
      </div>
      
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredOpportunities.map((opportunity) => (
          <Card
            key={opportunity._id}
            data={opportunity}
            className="transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl"
          />
        ))}
      </ul>
    </div>
  );
};

export default Opportunities;




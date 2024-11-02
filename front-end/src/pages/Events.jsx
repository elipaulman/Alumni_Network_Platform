import React, { useState } from 'react';
import "./Events.css";
import artistPic from "../images/artistPic.jpg";

const events = [
  { date: '2024-09-02', title: 'Cansu Yıldıran: Haunt the Present | Presented by Protocinema', description: 'An opening reception for the new modern art exhibit.', imageUrl: 'https://via.placeholder.com/150' },
  { date: '2024-09-21', title: 'Tropical Frequencies Exhibition Tour, Dance Workshop and Experimental Performance Show', description: 'Hands-on workshop on sculpting techniques.', imageUrl: 'https://via.placeholder.com/150' },
  { date: '2024-09-21', title: 'Hope is a dicipline Exhibition Tour and Artist Talk', description: 'Learn the basics of painting with acrylics.', imageUrl: 'https://via.placeholder.com/150' },
  { date: '2023-11-15', title: 'Digital Art Showcase', description: 'A showcase of local digital artists.', imageUrl: 'https://via.placeholder.com/150' },
  { date: '2023-11-20', title: 'Art History Lecture', description: 'Lecture on the influence of Renaissance art on modern culture.', imageUrl: 'https://via.placeholder.com/150' },
  { date: '2023-11-25', title: 'Figure Drawing Class', description: 'A class focused on human figure drawing techniques.', imageUrl: 'https://via.placeholder.com/150' },
  { date: '2023-11-30', title: 'Gallery Night', description: 'A night to explore local galleries and meet artists.', imageUrl: 'https://via.placeholder.com/150' },
];

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleTitleClick = (event) => {
    setSelectedEvent(event);
  };

  const closePopup = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Events This Month</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-md p-6">
            <img src={event.imageUrl} alt={event.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
            <h2
              className="text-2xl font-semibold text-gray-800 mb-2 cursor-pointer hover:text-blue-500"
              onClick={() => handleTitleClick(event)}
            >
              {event.title}
            </h2>
            <p className="text-gray-600 mb-1"><strong>Date:</strong> {event.date}</p>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{selectedEvent.title}</h2>
            <p className="text-gray-700 mb-4">{selectedEvent.description}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;

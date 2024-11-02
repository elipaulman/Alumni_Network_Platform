import React, { useState } from 'react';
import "./Events.css";
import artistPic from "../images/artistPic.jpg";
import somePic from '../images/alumain.png';
import anotherPic from '../images/Hope.jpg';
import GranteePic from '../images/Grantee.jpg';
import TeachMe from '../images/TeachMe.jpg';
import Augmented from '../images/Augmented.jpg';
import Bounce from '../images/Bounce.png';

const events = [
  { date: '2024-09-02', title: 'Cansu Yıldıran: Haunt the Present | Presented by Protocinema', category: 'Modern Art', description: 'An opening reception for the new modern art exhibit.', imageSrc: artistPic },
  { date: '2024-09-21', title: 'Tropical Frequencies Exhibition Tour, Dance Workshop and Experimental Performance Show', category: 'Workshop', description: 'Conducted as a follow-along with guided improvisation, DIDIDADA celebrates nonsensical play with accessible, multidisciplinary exercises. It focuses on catharsis, reconnecting with the body, and the joy of movement through dance inspired by Caribbean styles, fitness, and somatic practices.', imageSrc: 'https://lmcc.net/wp-content/uploads/2024/09/Coco-Villa_Credit-Olu-Okiemute.jpg' },
  { date: '2024-09-21', title: 'Hope is a dicipline Exhibition Tour and Artist Talk', category:'Lecture', description: "Wong's installation, The Red what reading did re-adding, examines the League of Revolutionary Struggle using material from Unity Newspaper (2024), blending historical content with new writing and interviews. Inspired by Amiri Baraka, it reflects on how political inheritance influences our understanding of history.", imageSrc: anotherPic },
  { date: '2024-04-30', title: 'The Power of Bounce', category:'Dance', description: 'Miguel Gutierrez presents an interactive dance performance featuring group choreography, aerobics, and costumes. Participants are encouraged to wear costumes and learn the famous “Aerobicon” dance, creating a powerful public spectacle that celebrates movement, joy, and resilience amidst everyday challenges.', imageSrc: Bounce },
  { date: '2024-09-09', title: 'Grantee Events', category:'Grantee', description: 'TWEED TheaterWorks presents Garden Variety, a free performance series at historic community space 6&B Garden in the East Village. This summer’s series will include music and performance by artists including Ms. Zilbert & Co., Julian Fleisher, Rebecca Havemayer, Angela DeCarlo, Lacy Rose and her Starling Quartet, and Dane Terry. Join us on July 23, August 27, and September 3, 10, & 17 (rain date each following Thursday).', imageSrc: GranteePic },
  { date: '2024-08-08', title: 'Teach Me What Love Is',category:'Lecture', description: '"Teach Me What Love Is" is a participatory performance and karaoke workshop that explores the meaning of "love" across different languages. It highlights the experiences of ESL speakers and examines the nuances of language and translation through the shared cultural experience of love songs.', imageSrc: TeachMe },
  { date: '2024-08-08', title: 'I Love NY: Augmented Reality Edition',category:'Lecture', description: 'I Love NY: Augmented Reality Edition is a free two-day class that teaches participants to create augmented reality artworks by transforming their physical surroundings using accessible 3D modeling tools. Led by Sacha Alexandra, attendees will explore New York City through animation and leave with personalized 3D artwork, while also gaining skills to use this technology for creative projects.', imageSrc: Augmented },
];

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleTitleClick = (event) => {
    setSelectedEvent(event);
  };

  const closePopup = () => {
    setSelectedEvent(null);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredEvents = selectedCategory === 'All'
  ? events
  : events.filter((event) => event.category === selectedCategory);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Events This Month</h1>
      <div className="flex justify-center mb-6">
        <button className={`mx-2 px-4 py-2 rounded ${selectedCategory === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleCategoryChange('All')}>All</button>
        <button className={`mx-2 px-4 py-2 rounded ${selectedCategory === 'Modern Art' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleCategoryChange('Modern Art')}>Modern Art</button>
        <button className={`mx-2 px-4 py-2 rounded ${selectedCategory === 'Workshop' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleCategoryChange('Workshop')}>Workshop</button>
        <button className={`mx-2 px-4 py-2 rounded ${selectedCategory === 'Lecture' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleCategoryChange('Lecture')}>Lecture</button>
        <button className={`mx-2 px-4 py-2 rounded ${selectedCategory === 'Grantee' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleCategoryChange('Grantee')}>Grantee</button>
        <button className={`mx-2 px-4 py-2 rounded ${selectedCategory === 'Dance' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} onClick={() => handleCategoryChange('Dance')}>Dance</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-md p-6">
            <img src={event.imageSrc} alt={event.title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
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
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-#00BDF2"
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

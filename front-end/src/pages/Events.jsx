import React, { useState } from 'react';
import "./Events.css";
import artistPic from "../images/artistPic.jpg";
import somePic from '../images/alumain.png';
import anotherPic from '../images/Hope.jpg';
import GranteePic from '../images/Grantee.jpg';
import TeachMe from '../images/TeachMe.jpg';
import Augmented from '../images/Augmented.jpg';

const events = [
  { date: '2024-09-02', title: 'Cansu Yıldıran: Haunt the Present | Presented by Protocinema', description: 'An opening reception for the new modern art exhibit.', imageSrc: somePic },
  { date: '2024-09-21', title: 'Tropical Frequencies Exhibition Tour, Dance Workshop and Experimental Performance Show', description: 'Conducted in follow-along style and guided improvisation, it is a celebration of nonsensical play. DIDIDADA prioritizes accessibility and silliness to give your mind, body, and spirit a sparkly mega boost through a variety of multidisciplinary exercises. It is about catharsis, getting back into our bodies, and simply dancing for the joy of moving through hyper warm ups, routines, and prompts. Instruction is inspired by Caribbean dance styles, dance fitness, somatic movement practices, and self proclaimed rituals.', imageSrc: 'https://lmcc.net/wp-content/uploads/2024/09/Coco-Villa_Credit-Olu-Okiemute.jpg' },
  { date: '2024-09-21', title: 'Hope is a dicipline Exhibition Tour and Artist Talk', description: 'Learn the basics of painting with acrylics.', imageSrc: anotherPic },
  { date: '2023-11-15', title: 'Digital Art Showcase', description: 'A showcase of local digital artists.', imageSrc: artistPic },
  { date: '2023-11-20', title: 'Art History Lecture', description: 'Lecture on the influence of Renaissance art on modern culture.', imageSrc: GranteePic },
  { date: '2023-11-25', title: 'Figure Drawing Class', description: 'A class focused on human figure drawing techniques.', imageSrc: TeachMe },
  { date: '2023-11-30', title: 'I Love NY: Augmented Reality Edition', description: 'I Love NY: Augmented Reality Edition is a free 2-day class that will explore the world of 3D design, augmented reality, and animation. Through a series of interactive prompts, attendees will learn to transform their physical surroundings into augmented reality artworks using accessible modeling software. By the end of the workshop, participants will leave with a personalized 3D artwork, ready to use in future projects. Attendees will also acquire knowledge of how to effectively utilize this technology in various applications, opening up new avenues for creative expression and innovation. Led by transdisciplinary artist Sacha Alexandra, this workshop will explore love for New York City and built environments via animation and machine play. This workshop is most suitable for those ages 18 and up but we welcome anyone from 12yrs old and above, attendees who are under 18 must be accompanied by an adult. Space is very limited, sign up is required.', imageSrc: Augmented },
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

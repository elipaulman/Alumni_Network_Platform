import React, { useState } from 'react';

const DirectoryCard = ({ data }) => {
  const [showEmail, setShowEmail] = useState(false);

  if (!data) return null;

  return (
    <div 
      className="relative rounded-lg shadow-md bg-white overflow-hidden cursor-pointer transform transition hover:scale-105"
      onClick={() => setShowEmail(true)}
    >
      {/* Card Content */}
      <div className="p-4">
        <img 
          src="/api/placeholder/100/100"
          alt={`${data.name || 'Alumni'}'s profile`}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold text-center mb-2">{data.name || 'Unnamed Alumni'}</h3>
        <p className="text-gray-600 text-center mb-1">{data.category || 'No Category Listed'}</p>
        <p className="text-gray-500 text-center text-sm">{data.location || 'Location not specified'}</p>
        <p className="text-gray-500 text-center text-sm">{data.artCategory || 'Art category not specified'}</p>
      </div>

      {/* Email Popup Overlay */}
      {showEmail && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={(e) => {
              e.stopPropagation();
              setShowEmail(false);
            }}
          />
          
          {/* Popup */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       bg-white rounded-lg shadow-xl p-4 z-50 min-w-[200px] text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="font-semibold mb-2">Contact Information</h4>
            <p className="text-blue-600">{data.email || 'Email not available'}</p>
            <button
              className="mt-3 text-sm text-gray-600 hover:text-gray-800"
              onClick={(e) => {
                e.stopPropagation();
                setShowEmail(false);
              }}
            >
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DirectoryCard;
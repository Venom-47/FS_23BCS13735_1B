import React from 'react';

const RestaurantCard = ({ name, category, status, description, imageUrl, imageAlt }) => {
  // Determine status color classes
  let statusClasses = '';
  if (status === 'Open') {
    statusClasses = 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
  } else if (status === 'Closing Soon') {
    statusClasses = 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
  } else if (status === 'Closed') {
    statusClasses = 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
  }

  return (
    <div className="flex flex-col gap-4 bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      {/* Image */}
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover"
        data-alt={imageAlt}
        style={{ backgroundImage: `url("${imageUrl}")` }}
      ></div>
      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{name}</h3>
          <span className={`text-xs font-semibold py-1 px-2.5 rounded-full ${statusClasses}`}>
            {status}
          </span>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{category}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
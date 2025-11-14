import React from 'react';

const MenuItemCard = ({ name, price, description }) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
    <div className="flex justify-between items-start">
      <h3 className="text-lg font-semibold text-[#111618] dark:text-white">{name}</h3>
      <p className="text-lg font-bold text-primary">{price}</p>
    </div>
    <p className="text-gray-600 dark:text-gray-400 mt-1">{description}</p>
  </div>
);

export default MenuItemCard;
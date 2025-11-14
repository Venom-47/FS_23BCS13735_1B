import React from 'react';

const HoursTableItem = ({ day, time, isLast = false }) => (
  <div className={`col-span-2 grid grid-cols-subgrid py-3 ${!isLast ? 'border-b border-b-[#dbe2e6] dark:border-gray-700' : ''}`}>
    <p className="text-[#617c89] dark:text-gray-400 text-sm font-normal leading-normal">{day}</p>
    <p className="text-[#111618] dark:text-white text-sm font-normal leading-normal text-right">{time}</p>
  </div>
);

export default HoursTableItem;
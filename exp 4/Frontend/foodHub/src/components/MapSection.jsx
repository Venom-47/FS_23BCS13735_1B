import React from 'react';
import { Link } from 'react-router-dom';

const MapSection = () => {
  return (
    <div className="mt-16 p-4">
      <div className="flex flex-col md:flex-row items-center gap-8 rounded-xl shadow-lg bg-white dark:bg-background-dark/50 overflow-hidden p-6">
        <div className="w-full md:w-1/2 h-64 md:h-80 rounded-lg overflow-hidden relative">
          <img alt="Campus map with pins indicating food locations" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz0_SN4hNac_fblctCJNiBrhV6RS36Upl1bPRdrt732GdLbpT1LXf6Oy3FHuRk1WppTTlWDlXmqWDg5srUwJJ7sEU7Bkr1V2PbqxVIHOT8wZbwViRMNYfRilKV5bZ3HsI1NyjTB0NHyAUB07I4cGWCXZUQ7OyZFX7dXy3ppZDgLCXXIl5ANIIBpjRaO4QZOrcnAwKWT7q-7Gsv9xBwYSLu8A7Ab3NAADI6JCQMwyoEQ7XWO-j2Y-UaARd3SgfVnWDJsz922BvVI8Ro"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-white text-5xl">place</span>
          </div>
          <data className="hidden" data-location="University Campus"></data>
        </div>
        <div className="flex flex-col items-start text-center md:text-left w-full md:w-1/2">
          <h3 className="text-2xl font-bold mb-2">Explore the Campus Map</h3>
          <p className="text-subtle-light dark:text-subtle-dark mb-6">Find dining halls, cafes, and restaurants near you. Hover over pins to see store names and get directions.</p>
          <Link to="/map" className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-6 bg-green-600 text-white text-base font-medium leading-normal hover:bg-green-700 transition-colors self-center md:self-start">
            <span>View Full Map</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
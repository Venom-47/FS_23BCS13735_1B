import React, { useState, useEffect } from 'react'; // Import hooks
import RestaurantCard from '../components/RestaurantCard';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Food = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rawResponse, setRawResponse] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL ?? '/api/restaurants';

  const fetchRestaurants = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        const text = await response.text().catch(() => null);
        throw new Error(`HTTP ${response.status} ${response.statusText}${text ? `: ${text}` : ''}`);
      }

      const data = await response.json();
      setRawResponse(data);

      if (Array.isArray(data)) {
        setRestaurants(data);
      } else if (Array.isArray(data?.restaurants)) {
        setRestaurants(data.restaurants);
      } else if (Array.isArray(data?.data)) {
        setRestaurants(data.data);
      } else {
        setRestaurants([]);
      }

      setError(null);
    } catch (e) {
      console.error('Failed to fetch restaurants:', e);
      setError(e?.message ?? 'Failed to load dining data. Please try again.');
    } finally {
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []); 

  let content;

  if (isLoading) {
    content = (
      <div className="flex justify-center items-center py-10">
        <p className="text-xl text-gray-600">Loading restaurants...</p>
      </div>
    );
  }
  else if (error) {
    content = (
      <div className="flex justify-center items-center py-10 bg-red-50 p-4 rounded-lg">
        <div className="flex flex-col items-center gap-3">
          <p className="text-xl text-red-700">{error}</p>
          <div className="flex gap-2">
            <button
              onClick={() => fetchRestaurants()}
              className="px-4 py-2 rounded bg-primary text-white hover:brightness-95"
            >
              Retry
            </button>
            <button
              onClick={() => { setError(null); setIsLoading(true); fetchRestaurants(); }}
              className="px-4 py-2 rounded bg-white border text-gray-700 hover:bg-gray-50"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  } else if (restaurants.length === 0) {
    content = (
      <div className="flex justify-center items-center py-10">
        <p className="text-xl text-gray-600">No restaurants found.</p>
        {rawResponse && (
          <details className="mt-3 text-left bg-gray-50 p-3 rounded max-w-3xl">
            <summary className="cursor-pointer text-sm text-gray-700">Show API response (debug)</summary>
            <pre className="mt-2 text-xs text-gray-700 overflow-auto max-h-48">
              {JSON.stringify(rawResponse, null, 2)}
            </pre>
          </details>
        )}
      </div>
    );
  } else {
    content = (
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            category={restaurant.category}
            status={restaurant.status}
            description={restaurant.description}
            imageUrl={restaurant.imageUrl}
            imageAlt={restaurant.imageAlt}
          />
        ))}
      </div>
    );
  }


  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl flex-1">

            <Header/>

            {/* 🌮 Main Content */}
            <main className="flex-1 px-4 sm:px-6 md:px-10 py-8">
              <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                <p className="text-4xl font-black tracking-tighter text-gray-900 dark:text-white">On-Campus Dining Directory</p>
              </div>
              
              {/* Search and Filters Bar (Unchanged) */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 p-4 bg-white dark:bg-background-dark rounded-xl shadow-sm">
                {/* ... (Your search and filter UI code remains here) ... */}
                <div className="w-full md:w-auto flex-grow">
                  <label className="relative text-gray-400 focus-within:text-gray-600 block">
                    <span className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 left-3">search</span>
                    <input 
                      className="form-input w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary border-gray-300 dark:border-gray-600 bg-background-light dark:bg-gray-700/50 h-12 placeholder:text-gray-500 dark:placeholder:text-gray-400 pl-12 pr-4 text-base font-normal leading-normal" 
                      placeholder="Search for food, restaurants..." 
                      defaultValue="" 
                      type="text"
                    />
                  </label>
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-2">
                  {/* Sort Button */}
                  {['Sort: A-Z', 'Category', 'Area'].map((text) => (
                    <button key={text} className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-700 px-4 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      <p className="text-sm font-medium">{text}</p>
                      <span className="material-symbols-outlined text-lg">arrow_drop_down</span>
                    </button>
                  ))}
                </div>
                {/* View Toggles */}
                <div className="hidden md:flex items-center justify-center gap-2 p-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <button className="p-2 rounded-full bg-white dark:bg-gray-800 text-primary">
                    <span className="material-symbols-outlined">grid_view</span>
                  </button>
                  <button className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">view_list</span>
                  </button>
                </div>
              </div>

              {/* Restaurant Cards Grid (Now dynamic) */}
              {content}
              
            </main>

            <Footer/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
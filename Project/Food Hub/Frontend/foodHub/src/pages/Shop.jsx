import React from 'react';
import MenuItemCard from '../components/MenuItemCard';
import HoursTableItem from '../components/HoursTableItem';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Shop = () => {
  const menuSections = [
    {
      id: 'breakfast',
      title: 'Breakfast',
      items: [
        { name: 'Pancake Stack', price: '₹ 140', description: 'Three fluffy buttermilk pancakes served with maple syrup and a knob of butter.' },
        { name: 'Avocado Toast', price: '₹ 190', description: 'Toasted sourdough topped with fresh avocado, chili flakes, and a squeeze of lime.' },
      ],
    },
    {
      id: 'sandwiches',
      title: 'Sandwiches',
      items: [
        { name: 'Classic Cheeseburger', price: '₹ 80', description: 'A juicy beef patty with cheddar cheese, lettuce, and tomato on a brioche bun.' },
        { name: 'Grilled Chicken Club', price: '₹ 120', description: 'Grilled chicken breast, crispy bacon, lettuce, tomato, and mayonnaise on toasted bread.' },
      ],
    },
  ];
  
  const operationHours = [
    { day: 'Monday', time: '7:00 AM - 8:00 PM' },
    { day: 'Tuesday', time: '7:00 AM - 8:00 PM' },
    { day: 'Wednesday', time: '7:00 AM - 8:00 PM' },
    { day: 'Thursday', time: '7:00 AM - 8:00 PM' },
    { day: 'Friday', time: '7:00 AM - 10:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 10:00 PM' },
    { day: 'Sunday', time: '9:00 AM - 5:00 PM' },
  ];


  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden" style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <Header/>
            {/* 🍔 Hero Image and Title */}
            <div className="@container">
              <div className="@[480px]:px-4 @[480px]:py-3">
                <div 
                  className="bg-cover bg-center flex flex-col justify-end overflow-hidden @[480px]:rounded-lg min-h-[320px]" 
                  data-alt="A delicious looking burger with fries from The Ram's Head Diner" 
                  style={{ 
                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDniDzkQILY8jGh6rfTmt54PnfCYxHDOPGvOHyywQUnhdRFD3W854UAUYJeJbnEqefsbaD4HjcivfGlwwgEeYBV2x1pwgplid1zRst7zDsR9_MPOx2FvRQ3PgCzU0t5eYg8hqmILS8BlhA_7siliLD1RWrbf7VA-Jup9xg7lAGzmIhqsDjZU_4y0aAVt3c3WWK5wKb_oUIb-fIz8H3dcUvIwVWI4OGc5Dh-KNtUvP25S7AJn-NaEjhUEM8D8wB0H-rr87Zqcmfqnl25")` 
                  }}
                >
                  <div className="p-4">
                    <h1 className="text-white tracking-light text-3xl md:text-4xl font-bold leading-tight">
                      The Corner Cafe
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[#111618] dark:text-gray-300 text-base font-normal leading-normal pb-3 pt-1 px-4">
              Near B1 Block
            </p>

            {/* 🟢 Status and Hours Link */}
            <div className="px-4 py-3">
              <div className="flex items-center gap-4 bg-white dark:bg-background-dark px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="relative">
                  <span className="material-symbols-outlined text-green-500 text-2xl">
                    check_circle
                  </span>
                </div>
                <p className="text-[#111618] dark:text-gray-200 text-base font-semibold leading-normal flex-1 truncate">
                  Open Now
                </p>
                <a className="text-primary text-sm font-bold hover:underline" href="#hours">
                  See Hours
                </a>
              </div>
            </div>

            {/* 🏷️ Menu Tabs */}
            <div className="pt-8">
              <div className="pb-3">
                <div className="flex border-b border-[#dbe2e6] dark:border-gray-700 px-4 gap-8 overflow-x-auto whitespace-nowrap">
                  {/* Current Active Tab */}
                  <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-primary pb-[13px] pt-4" href="#breakfast">
                    <p className="text-sm font-bold leading-normal tracking-[0.015em]">Breakfast</p>
                  </a>
                  {/* Inactive Tabs */}
                  {['Sandwiches', 'Salads', 'Beverages'].map((tab, index) => (
                    <a key={index} className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#617c89] dark:text-gray-400 pb-[13px] pt-4 hover:border-b-gray-400 transition-colors" href={`#${tab.toLowerCase()}`}>
                      <p className="text-sm font-bold leading-normal tracking-[0.015em]">{tab}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* 🍳 Menu Sections (Breakfast & Sandwiches) */}
            {menuSections.map((section) => (
              <div key={section.id} className="px-4 pt-6" id={section.id}>
                <h2 className="text-2xl font-bold text-[#111618] dark:text-white mb-4">{section.title}</h2>
                <div className="space-y-4">
                  {section.items.map((item, index) => (
                    <MenuItemCard
                      key={index}
                      name={item.name}
                      price={item.price}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>
            ))}
            
            {/* ⏰ Hours of Operation */}
            <div className="px-4 pt-8" id="hours">
              <h2 className="text-2xl font-bold text-[#111618] dark:text-white mb-4">Hours of Operation</h2>
              <div className="p-4 grid grid-cols-[auto_1fr] gap-x-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                {operationHours.map((hour, index) => (
                  <HoursTableItem
                    key={hour.day}
                    day={hour.day}
                    time={hour.time}
                    isLast={index === operationHours.length - 1}
                  />
                ))}
              </div>
            </div>

            {/* 📍 Location Map */}
            <div className="px-4 py-8">
              <h2 className="text-2xl font-bold text-[#111618] dark:text-white mb-4">Location</h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                <a href="#" rel="noopener noreferrer" target="_blank">
                  <img 
                    className="w-full h-64 object-cover" 
                    data-alt="A map showing the location of The Ram's Head Diner on campus" 
                    data-location="University Campus" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcSTEc7d9d19KUZphu7af1ntNcAvscq8LHL3iKzrgo3Jtuj762TcQHeeP652xYmHhKveXoOj261wY1LuTcdR-o3LhLS9J1d3bS9IvPm_IChutDCtEx6WM20xv41jOkwqdFzr-QRKKXF7sAnZVlUZHM2mjDpOFx2h2mHgsd2ffoWeLl4ns7EBog0YM2m3TPmevwCTDPD0SvQr6dLGwCeOwfUFplHQq4whqKSuNM8mf0urz0NgP99L51oXRM8_wWSCEqRAOb6VARUoJ0"
                  />
                </a>
                <div className="p-4">
                  <a className="inline-flex items-center text-primary text-sm font-bold hover:underline" href="#" rel="noopener noreferrer" target="_blank">
                    View on Campus Map
                    <span className="material-symbols-outlined ml-1 text-base">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>

            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
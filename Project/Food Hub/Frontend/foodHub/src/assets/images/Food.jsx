import React from "react";

import RestaurantCard from "../components/RestaurantCard"; // Import the reusable component

import Header from "../components/Header";

import Footer from "../components/Footer";

const Food = () => {
  const restaurants = [
    {
      id: 1,

      name: "The Corner Cafe",

      category: "Sandwiches",

      status: "Open",

      description:
        "Freshly made sandwiches and salads with locally sourced ingredients.",

      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAfcgGxxYL9LEeFB4RHwLYTjga0GmJ0lcWbcEJHhAq2nsaICQ00fFyjRYBjmt_2aUdbGph8wXdWz7Y_oC2GXYhQe8FNK1UWDI4RZGUG4QyFtk-EZj1ycFWvXSO0Wsm9EAWCXTZWQH0epwqgh2FIXjhGAXGSeVmWDWT_qL7MKjRCRX4FzspfoO9D_AQshhYj2woNbxP8KAD0PQh_87E-9ehNkOlJCZa7vS4L3SEVt68cMjNOX4BqOVkEpfTSmnSXMzsxWejEE5u0NSYf",

      imageAlt: "A delicious looking sandwich from The Corner Deli",
    },

    {
      id: 2,

      name: "Pizza Palace",

      category: "Pizza",

      status: "Open",

      description: "Authentic Italian pizza with a wide variety of toppings.",

      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBLvdAm7DrtuJEMle6kZkJyhIeo6rbBvAu99LA6o4fyUdx4X16cSqXE8OVgY94patXIAhKHEgnymtQACqqNptqViAbg-LipNBQROL19iCA3k_IPbqbKZS8afhb76mKBFRCsPnOKPEiOGE2JJqsjKJerBb0bybfIECZRsfIVDy5ej7Hs0WxZBSdbypr5pHKvg8Lo-rk3nsciKlPF80PruDhANo6NFc8dJfs1JtplGrGkx7xsL0J3MxDWuVKeGzjuPiCCj183wZ2-pEMO",

      imageAlt: "A classic pepperoni pizza from Pizza Palace",
    },

    {
      id: 3,

      name: "Burrito Bowl",

      category: "Mexican",

      status: "Closing Soon",

      description: "Customizable burrito bowls, tacos, and quesadillas.",

      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuASJ-vfFaYv2f8VWNzhAPD8vWFCpF72GT8f7NZenRyW4YLZAAo-IJzFtb4a2sPJr-FsBGKyKqDJhmiPfpLLXNH_CQfWi12IKvpAKbthpWcZuREnG618LS9LRxFFn7AX4xkvipzsiN4xgPehBx6eK7ucK_ghiId38ijAw1dy7YOvRmFnymkx7eLKrqp7WQ6saerqdrnb0VBagDNR2kmWl2gcSUnGUbTG2lJjJlGke8ZvTe7qRJJFU9w7atH_mpVO6nHrgLIZrAzngsrP",

      imageAlt: "A colorful burrito bowl",
    },

    {
      id: 4,

      name: "The Coffee House",

      category: "Cafe",

      status: "Closed",

      description: "Specialty coffees, pastries, and a quiet place to study.",

      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAsy5miiyujOW9L0IeKHe7jJbdWP4cw8pgBpkd8Tn6Q_wnKKDaSNbawUDAgp6fUZtuOZEb5wxJkiKy8zf0FX8jyva7HfakSXLawV7pq9-1qvk3vltJuTEUPCU3VvnXXjysVXqsC07Nq4kni5zTCH0BoiSaaKehhmPER1ocVNbGS2Sq_nrDkc6amyVOD8gARpoiJGEjQoiIdb_v48TtZhLtEDQC6OOP3JSskKenFaLzybLZbOiiPufxg1o8gsoTK7zkCZ6c2DpdqP0-H",

      imageAlt: "A cozy coffee shop interior",
    },

    {
      id: 5,

      name: "Healthy Eats",

      category: "Salads",

      status: "Open",

      description: "Build-your-own salads and healthy grain bowls.",

      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAlyf4ofJt1nd7QTBIqEfAtE4rLX_YVywDofHhV6gAGtjlFgvU8qIQoe1pOKrUXFRQHt1QA0Y3KCnq1k9qjQQLDKf1Sh9Tuhb0Dv50floN82R2pcETdMklZLFNv4M1I8eCYRNJrc5rstlaCO5fiotRQWdlCTbPZPXy9h84uHwrUkxKNNMRjwpYw_OW_eafggXaQGf4mpdyFDjXHs7XdxoBcyf3VDA2i-BLD1xuGn7dOueDiTKjFIGLLqktVpDCYo32pwDAI2it1prNg",

      imageAlt: "A fresh and healthy salad",
    },

    {
      id: 6,

      name: "Sushi Station",

      category: "Japanese",

      status: "Open",

      description: "Fresh sushi rolls, sashimi, and bento boxes.",

      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBRLFyk7p6zzZ02QZu_04acfH-4TBJ6Xw0CtIL95333S4F_Sp2Xx7bWGu8nF8oI3VbQiAI-us7N3y4jSPwPaw145fNte5M5F0wUEK0sSRJ3HOpTd5gTDq9e90ot8oIHf1veEn6FwTjeCKKjfQTDiYHeZYKZyNvZN3ffFXdCihjUcOCbRv7R_cnaMcqCCZmwL_fHB0RELT1nDqF6-zIKXiwDSPaZ8Z-Bkc7SivkWNZzscnK0eVY4T-nhph6pXJraJg7jOmqdSS_m5Uui",

      imageAlt: "An assortment of sushi rolls",
    },
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl flex-1">
            <Header />

            {/* 🌮 Main Content */}

            <main className="flex-1 px-4 sm:px-6 md:px-10 py-8">
              <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                <p className="text-4xl font-black tracking-tighter text-gray-900 dark:text-white">
                  On-Campus Dining Directory
                </p>
              </div>

              {/* Search and Filters Bar */}

              <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 p-4 bg-white dark:bg-background-dark rounded-xl shadow-sm">
                <div className="w-full md:w-auto flex-grow">
                  <label className="relative text-gray-400 focus-within:text-gray-600 block">
                    <span className="material-symbols-outlined absolute top-1/2 -translate-y-1/2 left-3">
                      search
                    </span>

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

                  {["Sort: A-Z", "Category", "Area"].map((text) => (
                    <button
                      key={text}
                      className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-700 px-4 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <p className="text-sm font-medium">{text}</p>

                      <span className="material-symbols-outlined text-lg">
                        arrow_drop_down
                      </span>
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

              {/* Restaurant Cards Grid */}

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
            </main>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;

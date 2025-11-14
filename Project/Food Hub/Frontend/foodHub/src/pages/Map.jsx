import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';

const Map = () => {
  // State for filter management (retained for functionality)
  const [foodFilters, setFoodFilters] = useState({
    sandwiches: true,
    coffeeTea: false,
    pizza: false,
    healthy: false,
    vegan: false,
  });
  const [statusFilter, setStatusFilter] = useState("openNow");
  const [nearestTo, setNearestTo] = useState("");

  // Handler for food type checkboxes
  const handleFoodFilterChange = (event) => {
    setFoodFilters({
      ...foodFilters,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl flex-1">
            <Header />

            {/* Main Content Area: Sidebar + Map */}
            <div className="flex flex-1 overflow-hidden">
              {/* Sidebar (Filters) */}
              <aside className="w-80 h-full bg-white dark:bg-background-dark shadow-lg flex flex-col p-4 border-r border-gray-200 dark:border-gray-800">
                <div className="flex flex-col gap-6">
                  <h1 className="text-gray-800 dark:text-white text-lg font-bold leading-normal">
                    Filters
                  </h1>

                  {/* Food Type Filter */}
                  <div className="flex flex-col gap-4">
                    <h2 className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                      Food Type
                    </h2>
                    <div className="flex flex-col gap-2">
                      <label className="flex items-center gap-2 text-gray-800 dark:text-white text-sm">
                        <input
                          className="form-checkbox rounded text-primary focus:ring-primary/50"
                          type="checkbox"
                          name="coffeeTea"
                          checked={foodFilters.coffeeTea}
                          onChange={handleFoodFilterChange}
                        />{" "}
                        Coffee & Tea
                      </label>
                      <label className="flex items-center gap-2 text-gray-800 dark:text-white text-sm">
                        <input
                          className="form-checkbox rounded text-primary focus:ring-primary/50"
                          type="checkbox"
                          name="sandwiches"
                          checked={foodFilters.sandwiches}
                          onChange={handleFoodFilterChange}
                        />{" "}
                        Sandwiches
                      </label>
                      <label className="flex items-center gap-2 text-gray-800 dark:text-white text-sm">
                        <input
                          className="form-checkbox rounded text-primary focus:ring-primary/50"
                          type="checkbox"
                          name="pizza"
                          checked={foodFilters.pizza}
                          onChange={handleFoodFilterChange}
                        />{" "}
                        Pizza
                      </label>
                      <label className="flex items-center gap-2 text-gray-800 dark:text-white text-sm">
                        <input
                          className="form-checkbox rounded text-primary focus:ring-primary/50"
                          type="checkbox"
                          name="healthy"
                          checked={foodFilters.healthy}
                          onChange={handleFoodFilterChange}
                        />{" "}
                        Healthy
                      </label>
                      <label className="flex items-center gap-2 text-gray-800 dark:text-white text-sm">
                        <input
                          className="form-checkbox rounded text-primary focus:ring-primary/50"
                          type="checkbox"
                          name="vegan"
                          checked={foodFilters.vegan}
                          onChange={handleFoodFilterChange}
                        />{" "}
                        Vegan
                      </label>
                    </div>
                  </div>

                  {/* Opening Status Filter */}
                  <div className="flex flex-col gap-4">
                    <h2 className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                      Opening Status
                    </h2>
                    <div className="flex flex-col gap-2">
                      <label className="flex items-center gap-2 text-gray-800 dark:text-white text-sm">
                        <input
                          className="form-radio text-primary focus:ring-primary/50"
                          name="status"
                          type="radio"
                          checked={statusFilter === "openNow"}
                          onChange={() => setStatusFilter("openNow")}
                        />{" "}
                        Open Now
                      </label>
                      <label className="flex items-center gap-2 text-gray-800 dark:text-white text-sm">
                        <input
                          className="form-radio text-primary focus:ring-primary/50"
                          name="status"
                          type="radio"
                          checked={statusFilter === "all"}
                          onChange={() => setStatusFilter("all")}
                        />{" "}
                        All
                      </label>
                    </div>
                  </div>

                  {/* Nearest To Filter */}
                  <div className="flex flex-col gap-4">
                    <h2 className="text-gray-600 dark:text-gray-300 text-sm font-medium">
                      Nearest To
                    </h2>
                    <label className="flex flex-col">
                      <div className="flex w-full flex-1 items-stretch rounded-lg h-10">
                        <div className="text-gray-500 dark:text-gray-400 flex border-none bg-background-light dark:bg-gray-800 items-center justify-center pl-3 rounded-l-lg border-r-0">
                          <span className="material-symbols-outlined">
                            location_on
                          </span>
                        </div>
                        <input
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-gray-800 dark:text-white focus:outline-0 focus:ring-0 border-none bg-background-light dark:bg-gray-800 focus:border-none h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 text-sm font-normal leading-normal"
                          placeholder="Select a building"
                          value={nearestTo}
                          onChange={(e) => setNearestTo(e.target.value)}
                        />
                      </div>
                    </label>
                  </div>
                </div>
              </aside>

              {/* Main Map View */}
              <main className="flex-1 relative">
                {/* Map Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://mma.prnewswire.com/media/1751390/Chandigarh_University.jpg?p=facebook")',
                  }}
                  data-location="University Campus"
                />

                {/* Store Info Card */}
                <div className="absolute top-4 left-4 p-0.5">
                  <div className="flex items-start justify-between gap-4 rounded-lg bg-white dark:bg-background-dark p-4 shadow-xl max-w-sm">
                    <div className="flex flex-[2_2_0px] flex-col gap-3">
                      <div className="flex flex-col gap-1">
                        <p className="text-gray-800 dark:text-white text-base font-bold leading-tight">
                          The Corner Cafe
                        </p>
                        <div className="flex items-center gap-1.5">
                          <div className="size-2 rounded-full bg-green-500" />
                          <p className="text-green-600 dark:text-green-400 text-sm font-medium leading-normal">
                            Open
                          </p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                            · Closes at 8 PM
                          </p>
                        </div>
                      </div>
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-blue-500 text-white text-sm font-medium leading-normal w-fit shadow-sm hover:bg-blue-500/90 focus:ring-2 focus:ring-blue-500/50 focus:outline-none">
                        <Link to="/shop">View Menu</Link>
                      </button>
                    </div>
                    <div
                      className="w-28 h-20 bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                      style={{
                        backgroundImage:
                          'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZCDrMjEKARLUILVlpBOEIhiZ0jTPLAyNNRD6-OnIoxDOxTyAl0v4gzvsH5y3EsOIVTTl6WHuK7eZTelzP_hs6oXsIM2xhWEmMvK-nOjsYlQcX2w09H9xkPSgGrHo0yPLZiQqGoQJ-ioYL29dM--5tcgcl_2q-Q_BEdJ1mva_xbuqf5vVnY4-JmtTk6u9zJbMBgA42uRU2NdcZ-Vn2E2rHaQA9mZpOYKeJ9dfEcOOBUzPJ7RdHS80sjNGBeC1W3cMEq3syD0lm7m4b")',
                      }}
                      aria-label="Photo of The Corner Cafe's interior"
                    />
                  </div>
                </div>

                {/* Zoom and Location Controls */}
                <div className="absolute bottom-4 right-4 flex flex-col items-end gap-3">
                  <div className="flex flex-col gap-0.5">
                    <button className="flex size-10 items-center justify-center rounded-t-lg bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <span className="material-symbols-outlined text-gray-800 dark:text-white">
                        add
                      </span>
                    </button>
                    <button className="flex size-10 items-center justify-center rounded-b-lg bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                      <span className="material-symbols-outlined text-gray-800 dark:text-white">
                        remove
                      </span>
                    </button>
                  </div>
                  <button className="flex size-10 items-center justify-center rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className="material-symbols-outlined text-gray-800 dark:text-white">
                      my_location
                    </span>
                  </button>
                </div>

                {/* Pins on map */}
                <div className="absolute" style={{ top: "25%", left: "30%" }}>
                  <span className="material-symbols-outlined text-red-500 text-4xl drop-shadow-lg">
                    fmd_good
                  </span>
                </div>
                <div className="absolute" style={{ top: "50%", left: "50%" }}>
                  <span className="material-symbols-outlined text-primary text-4xl drop-shadow-lg">
                    fmd_good
                  </span>
                </div>
                <div className="absolute" style={{ top: "60%", left: "20%" }}>
                  <span className="material-symbols-outlined text-red-500 text-4xl drop-shadow-lg">
                    fmd_good
                  </span>
                </div>
                <div className="absolute" style={{ top: "75%", left: "65%" }}>
                  <span className="material-symbols-outlined text-red-500 text-4xl drop-shadow-lg">
                    fmd_good
                  </span>
                </div>
              </main>
            </div>

            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;

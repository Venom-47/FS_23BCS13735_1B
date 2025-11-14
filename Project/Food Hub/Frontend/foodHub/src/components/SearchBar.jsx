import React from 'react';

const SearchBar = () => {
  return (
    <div className="w-full max-w-2xl px-4 py-3">
      <label className="flex flex-col min-w-40 h-14 w-full">
        <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-md">
          <div className="text-subtle-light dark:text-subtle-dark flex bg-white dark:bg-background-dark items-center justify-center pl-5 rounded-l-xl border-y border-l border-subtle-light/30 dark:border-subtle-dark/30">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border-y border-r border-subtle-light/30 dark:border-subtle-dark/30 bg-white dark:bg-background-dark focus:border-primary/50 h-full placeholder:text-subtle-light dark:placeholder:text-subtle-dark px-4 pl-2 text-base font-normal leading-normal"
            placeholder="Search for Store Name, Food Type, or Menu Item..."
            type="text"
            defaultValue=""
          />
        </div>
      </label>
    </div>
  );
};

export default SearchBar;
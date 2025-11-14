import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ title, description, image, ctaLabel }) => {
  return (
    <div className="p-4 @container">
      <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start shadow-lg bg-white dark:bg-background-dark/50 overflow-hidden">
        <div
          className="w-full @xl:w-2/5 bg-center bg-no-repeat aspect-video @xl:aspect-square bg-cover rounded-t-xl @xl:rounded-l-xl @xl:rounded-t-none"
          style={{ backgroundImage: `url("${image}")` }}
          role="img"
          aria-label={title}
        />
        <div className="flex w-full grow flex-col items-start justify-center gap-2 p-6">
          <p className="text-xl font-bold leading-tight tracking-tight">{title}</p>
          <p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-normal mb-4">{description}</p>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-indigo-600 text-white text-sm font-medium leading-normal hover:bg-indigo-700 transition-colors">
            <Link className="truncate" to="/food">{ctaLabel}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
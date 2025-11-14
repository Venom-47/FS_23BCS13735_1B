import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FeatureCard from '../components/FeatureCard';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-7xl flex-1">
            
            <Header />

            <main className="flex-grow px-4 md:px-10 py-12">
              <div className="flex flex-col items-center gap-8">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center pb-2 pt-6">Find Your Next Meal on Campus</h1>
                <SearchBar />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                <FeatureCard
                  title="New Stores"
                  description="Check out the latest additions to our campus dining options."
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuBCdZahaW_zcffo7tgQfXrj6u2fINQz1CV3HIZFK0-J3YeZIWos6NPdIWFqgnLGJ5Y2UWMF8teT_iYFKqqXG5l5fVooXJK-4N3kJklxtNJpUPkQMz4tewoI-_x7M145t9Rz5W1-jtWI6-5STKpNM6Jl5s520ryKQlz6OSQgOegzLQ8qoLctEbyGDUpUAFnmlfy04_O4FqXBHt8vionUrWWkRTyuJihqKr8wxuICSGd96A2K2VeHmnVyev2GmKkARxPYz_DWKTrrXMZK"
                  ctaLabel="Explore"
                />
                <FeatureCard
                  title="Popular Now"
                  description="See what's trending among students and faculty."
                  image="https://lh3.googleusercontent.com/aida-public/AB6AXuAq9AGTFK1vYExoeSe1ZbAMTrNF5Ww9f0TkADIcoPzT0BKLc7RfVv1zlMJS2-It44Ecg_ffdRJX0XxeGsKXZLZTwsLsMsToeEJCUkJPqS5RwrLt9oGq7xG-bE5pbxG6dACGPpvWKaISbfGaz9OsS1iUTx9nsPRU89OglGuwovDsUrLWGnHUs1esCS6GxuxD5l1K2S_cHZ9wFuMv8JHgBBPxFs95qKHNanetoZtK-xTWFYkzNXfFbAnlxqBHyDN3dXJ4lRzscNbd_Z6A"
                  ctaLabel="Discover"
                />
              </div>

              <MapSection />
            </main>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
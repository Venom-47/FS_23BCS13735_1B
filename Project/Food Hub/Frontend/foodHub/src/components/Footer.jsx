import React from "react";
import { Link } from 'react-router-dom';

const Facebook = () => (
  <svg
    aria-hidden="true"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      clipRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      fillRule="evenodd"
    ></path>
  </svg>
);

const Twitter = () => (
  <svg
    aria-hidden="true"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
  </svg>
);

const Instagram = () => (
  <svg
    aria-hidden="true"
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.94 5.918c.414.075.714.47.714.898v6.368c0 .428-.3.823-.714.898a.901.901 0 01-1.03-.687 18.06 18.06 0 01-.22-1.928c-.14-.99-.333-1.913-.58-2.775a7.96 7.96 0 00-1.127-2.133c-.237-.333-.5-.613-.787-.84a.9.9 0 011.08-.223 11.23 11.23 0 011.85 1.35zM8.06 5.918a.9.9 0 011.08.223c.287.227.55.507.787.84a7.96 7.96 0 001.127 2.133c.247.862.44 1.785.58 2.775.06.63.134 1.28.22 1.928a.901.901 0 01-1.03.687c-.414-.075-.714-.47-.714-.898V6.816c0-.428.3-.823.714-.898z"
      fillRule="evenodd"
    ></path>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-white/50 dark:bg-background-dark/50 border-t border-solid border-subtle-light/20 dark:border-subtle-dark/20 mt-auto">
      <div className="max-w-6xl mx-auto px-10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-3">CU Food Hub</h4>
            <p className="text-sm text-subtle-light dark:text-subtle-dark">
              Your guide to campus dining.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3">Links</h4>
            <ul className="flex space-x-4 text-sm">
              <li>
                <Link
                  className="hover:text-primary dark:hover:text-primary"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary dark:hover:text-primary"
                  to="/food"
                >
                  Stores
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary dark:hover:text-primary"
                  to="/map"
                >
                  Map
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-3">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                className="text-subtle-light dark:text-subtle-dark hover:text-primary dark:hover:text-primary"
                href="#"
              >
                {<Facebook />}
              </a>
              <a
                className="text-subtle-light dark:text-subtle-dark hover:text-primary dark:hover:text-primary"
                href="#"
              >
                {<Twitter />}
              </a>
              <a
                className="text-subtle-light dark:text-subtle-dark hover:text-primary dark:hover:text-primary"
                href="#"
              >
                {<Instagram />}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-solid border-subtle-light/20 dark:border-subtle-dark/20 mt-8 pt-6 text-center text-sm text-subtle-light dark:text-subtle-dark">
        <p>© 2025 Chandigarh University. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

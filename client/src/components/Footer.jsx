import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-indigo-600 text-white text-sm mt-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} InternBoard. All rights reserved.
        </p>

        <div className="mt-2 md:mt-0 space-x-4 text-center md:text-right">
          <Link
            to="/privacy-policy"
            className="hover:text-indigo-200 transition duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="hover:text-indigo-200 transition duration-200"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

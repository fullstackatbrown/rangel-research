import { Span } from "next/dist/trace";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between flex-wrap bg-white p-6 border-t border-brown5">
      <div className="bg-transparent grid grid-cols-1">
        <div className="flex items-center flex-shrink-0 text-gray-purple mr-6 bg-transparent pb-2">
          <div className="bg-gray-300 rounded-lg h-12 w-12 flex items-center justify-center">
            <div className="bg-gray-400 rounded-md h-8 w-8"></div>
          </div>
          <span className="font-bold text-2xl tracking-tight pl-5 bg-transparent">
            Rangel Research Team
          </span>
        </div>
        <span className="text-gray-purple text-md font-semibold bg-transparent">
          Contact us at{" "}
          <Link href="mailto:familiesandschools@brown.edu" className="font-medium text-blue-600 hover:underline dark:text-blue-500 bg-transparent">
            familiesandschools@brown.edu
          </Link>{" "}
          or{" "}
          <Link href="mailto:david_rangel@brown.edu" className="font-medium text-blue-600 hover:underline dark:text-blue-500 bg-transparent">
            david_rangel@brown.edu
          </Link>
          .
        </span>
        <span className="text-gray-purple text-sm bg-transparent">
          © 2023 Rangel Research Team. All Rights Reserved.
        </span>
      </div>

      <div className="bg-transparent grid grid-cols-1 space-y-4">
        <div className="text-md divide-x-2 divide-brown2 bg-transparent">
          <Link
            href="/home"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-purple hover:text-brown5 px-5 bg-transparent"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-purple hover:text-brown5 px-5 bg-transparent"
          >
            About Project
          </Link>
          <Link
            href="/teamBios"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-purple hover:text-brown5 px-5 bg-transparent"
          >
            Research Team
          </Link>
        </div>
        <span className="text-gray-purple text-sm bg-transparent text-center">
          Website Designed & Developed by FSAB.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

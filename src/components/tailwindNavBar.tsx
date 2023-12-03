import React from "react";
import LangSwitchBtn from "./buttonLanguage";

const TailwindNavBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent p-6">
      <div className="flex items-center flex-shrink-0 text-gray-purple mr-6 bg-transparent">
        <div className="bg-brown5/50 rounded-lg h-16 w-16 flex items-center justify-center">
          <div className="bg-brown5 rounded-md h-12 w-12"></div>
        </div>
        <span className="font-bold text-2xl tracking-tight pl-5 bg-transparent">
          Rangel Research Team
        </span>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto bg-transparent ">
        <div className="text-md font-semibold flex justify-end lg:flex-grow pr-5 bg-transparent">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-purple hover:text-brown5 mr-4 bg-transparent"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-purple hover:text-brown5 mr-4 bg-transparent"
          >
            About Project
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-purple hover:text-brown5 bg-transparent"
          >
            Research Team
          </a>
        </div>
        <div className="flex items-center justify-between bg-transparent">
          <div className="pr-5 bg-transparent">
            <LangSwitchBtn language={"EN"} switchLang={"Spa"} />
          </div>
          <a
            href="#"
            className="inline-block text-sm px-4 py-2 leading-none bg-transparent border border-gray-purple rounded text-gray-purple hover:text-brown1 hover:bg-brown5 hover:border-transparent mt-4 lg:mt-0 ease-out duration-100"
          >
            Qualtrics Survey
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TailwindNavBar;

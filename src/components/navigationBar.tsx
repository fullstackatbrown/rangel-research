import React from "react";
import LangSwitchBtn from "./buttonLanguage";

const NavigationBar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 drop-shadow-md">
      <div className="flex items-center flex-shrink-0 text-gray-purple mr-6 bg-transparent">
        <div className="bg-brown5/50 rounded-lg h-16 w-16 flex items-center justify-center">
          <div className="bg-brown5 rounded-md h-12 w-12"></div>
        </div>
        <span className="font-bold text-2xl tracking-tight pl-5 bg-transparent">
          Rangel Research Team
        </span>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto bg-transparent ">
        <div className="text-md font-semibold flex space-x-10 justify-end lg:flex-grow pr-5 bg-transparent">
          <a
            href="home"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-purple hover:text-brown5 bg-transparent"
          >
            Home
          </a>
          <a
            href="about"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-purple hover:text-brown5 bg-transparent"
          >
            About Project
          </a>
          <a
            href="teamBios"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-purple hover:text-brown5 bg-transparent"
          >
            Research Team
          </a>
        </div>
        <div className="flex space-x-3 items-center justify-between bg-transparent">
          <LangSwitchBtn language={"EN"} switchLang={"Spa"} />
          <a
            href="https://brown.co1.qualtrics.com/jfe/form/SV_2seiVuFl1tCmNim"
            className="inline-block text-sm font-semibold px-4 py-2.5 leading-none bg-transparent border border-gray-purple rounded text-gray-purple hover:text-brown1 hover:bg-brown5 hover:border-transparent mt-4 lg:mt-0 ease-out duration-100"
          >
            Qualtrics Survey
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

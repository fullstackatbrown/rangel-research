import React from "react";
import LangSwitchBtn from "./buttonLanguage";

const NavigationBarESP = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6 drop-shadow-md">
      <div className="flex items-center flex-shrink-0 text-gray-purple mr-6 bg-transparent">
        <div className="bg-brown5/50 rounded-lg h-16 w-16 flex items-center justify-center">
          <div className="bg-brown5 rounded-md h-12 w-12"></div>
        </div>
        <span className="font-bold text-2xl tracking-tight pl-5 bg-transparent">
          Equipo de Investigación Rangel
        </span>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto bg-transparent ">
        <div className="text-md font-semibold flex space-x-10 justify-end lg:flex-grow pr-5 bg-transparent">
          <a
            href="/homeESP"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-purple hover:text-brown5 bg-transparent"
          >
            Inicio
          </a>
          <a
            href="/aboutESP"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-purple hover:text-brown5 bg-transparent"
          >
            Sobre Proyecto
          </a>
          <a
            href="/teamBiosESP"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-purple hover:text-brown5 bg-transparent"
          >
            Equipo de Investigación
          </a>
        </div>
        <div className="flex space-x-3 items-center justify-between bg-transparent">
          <LangSwitchBtn language={"EN"} switchLang={"Spa"} />
          <a
            href="https://brown.co1.qualtrics.com/jfe/form/SV_2seiVuFl1tCmNim"
            className="inline-block text-sm font-semibold px-4 py-2.5 leading-none bg-transparent border border-gray-purple rounded text-gray-purple hover:text-brown1 hover:bg-brown5 hover:border-transparent mt-4 lg:mt-0 ease-out duration-100"
          >
            Encuesta Qualtrics
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBarESP;

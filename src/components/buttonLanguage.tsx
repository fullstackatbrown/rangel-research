import React from 'react';
import { useRouter } from 'next/router';

interface LanguageMapping {
  [key: string]: string;
}

const LangSwitchBtn = () => {
  const router = useRouter();

  const toggleLanguage = () => {
    // Extract the pathname from the current route
    const currentPath: string = router.pathname;

    // Define a mapping for English to Spanish pages and vice versa
    const languageMapping: LanguageMapping = {
      '/': '/homeESP',
      '/home': '/homeESP',
      '/about': '/aboutESP',
      '/teamBios': '/teamBiosESP',
      '/homeESP': '/home',
      '/aboutESP': '/about',
      '/teamBiosESP': '/teamBios',
    };

    // Find the corresponding translated page in the mapping
    const translatedPath = languageMapping[currentPath];

    // Redirect to the translated page
    router.push({
      pathname: translatedPath,
    });
  };

  return (
    <button
      type="button"
      className="focus:outline-none"
      onClick={toggleLanguage}
    >
      <div className="flex items-center justify-center bg-transparent">
        <div
          className={`text-gray-purple bg-white w-14 h-9 border-2 border-gray-300 rounded-l`}
        >
          EN
        </div>
        <div
          className={`text-white bg-brown5 w-14 h-9 border-2 border-gray-300 rounded-r`}
        >
          Spa
        </div>
      </div>
    </button>
  );
};

export default LangSwitchBtn;

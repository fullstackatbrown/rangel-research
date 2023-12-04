import React from 'react';
import { useRouter } from 'next/router';

interface LanguageMapping {
  [key: string]: string;
}

const LangSwitchBtn = () => {
  const router = useRouter();

  const toggleToEnglish = () => {
    // Extract the pathname from the current route
    const currentPath: string = router.pathname;

    // Define a mapping for Spanish to English pages
    const languageMapping: LanguageMapping = {
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

  const toggleToSpanish = () => {
    // Extract the pathname from the current route
    const currentPath: string = router.pathname;

    // Define a mapping for English to Spanish pages
    const languageMapping: LanguageMapping = {
      '/': '/homeESP',
      '/home': '/homeESP',
      '/about': '/aboutESP',
      '/teamBios': '/teamBiosESP',
    };

    // Find the corresponding translated page in the mapping
    const translatedPath = languageMapping[currentPath];

    // Redirect to the translated page
    router.push({
      pathname: translatedPath,
    });
  };

  return (
    <div>
      <div className="grid grid-cols-2 bg-transparent">
        <button
          className={`text-white bg-brown5 w-20 h-9 border-2 border-gray-300 rounded-l flex items-center justify-center`}
          onClick={toggleToEnglish}
        >
          English
        </button>
        <button
          className={`text-gray-purple bg-white w-20 h-9 border-2 border-gray-300 rounded-r flex items-center justify-center`}
          onClick={toggleToSpanish}
        >
          Español
        </button>
      </div>
    </div>
  );
};

export default LangSwitchBtn;

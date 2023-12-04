import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

interface LangSwitchButtonProps {
  initialLanguage: string;
}

interface LanguageMapping {
  [key: string]: string;
}

const LangSwitchBtn = (props: LangSwitchButtonProps) => {
  const router = useRouter();
  const [language, setLanguage] = useState(props.initialLanguage);

  const redirectToTranslatedPage = () => {
    // Extract the pathname from the current route
    const currentPath: string = router.pathname;

    // Define a mapping for Spanish to English pages
    const spanishToEnglishMapping: LanguageMapping = {
      "/homeESP": "/home",
      "/aboutESP": "/about",
      "/teamBiosESP": "/teamBios",
    };

    // Define a mapping for English to Spanish pages
    const englishToSpanishMapping: LanguageMapping = {
      "/": "/homeESP",
      "/home": "/homeESP",
      "/about": "/aboutESP",
      "/teamBios": "/teamBiosESP",
    };

    // Determine the appropriate mapping based on the current language
    const languageMapping = language === "English" ? englishToSpanishMapping : spanishToEnglishMapping;

    // Find the corresponding translated page in the mapping
    const translatedPath = languageMapping[currentPath];

    // Redirect to the translated page
    router.push({
      pathname: translatedPath,
    });
  };

  const toggleToEnglish = () => {
    setLanguage(() => {
      redirectToTranslatedPage();
      return "English";
    });
  };

  const toggleToSpanish = () => {
    setLanguage(() => {
      redirectToTranslatedPage();
      return "Spanish";
    });
  };

  return language === "English" ? (
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
  ) : (
    <div>
      <div className="grid grid-cols-2 bg-transparent">
        <button
          className={`text-gray-purple bg-white w-20 h-9 border-2 border-gray-300 rounded-l flex items-center justify-center`}
          onClick={toggleToEnglish}
        >
          English
        </button>
        <button
          className={`text-white bg-brown5 w-20 h-9 border-2 border-gray-300 rounded-r flex items-center justify-center`}
          onClick={toggleToSpanish}
        >
          Español
        </button>
      </div>
    </div>
  );
};

export default LangSwitchBtn;

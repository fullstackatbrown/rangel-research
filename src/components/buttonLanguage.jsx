// language - the current language we are in
// switchLang should be setter to update langauge state
const LangSwitchBtn = ({ language, switchLang}) => {
    return (
      <button
        type="button"
        onClick={switchLang}
      >
        {language}
      </button>
    );
  };
  
  export default Button;
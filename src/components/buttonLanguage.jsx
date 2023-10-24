const LangSwitchBtn = ({ language, switchLang, onClick }) => {
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
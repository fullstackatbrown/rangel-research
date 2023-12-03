// language - the current language we are in
// switchLang should be setter to update langauge state

const LangSwitchBtn = ({ language, switchLang}) => {
    var enBackColor = ""
    var enColor = ""
    var spaBackColor = ""
    var spaColor = ""
    if (language == "EN") {
      enColor = "white"
      enBackColor = "#A24D2B"
      spaColor = "black"
      spaBackColor = ""
    } else {
      enColor = "black"
      enBackColor = ""
      spaColor = "white"
      spaBackColor = "#A24D2B"
    }
    return (
      <button
        type="button"
        onClick={switchLang}
      >
        <div style={{width: "100px", display: "flex", margin: "5px"}}>
          <div style={{color: enColor, backgroundColor: enBackColor, width: "50%", padding: "5px", margin: "2px", border: "1px solid", borderColor: "#C0C0C0", marginRight: 0, borderRadius: "5px 0 0 5px"}}>EN</div>
          <div style={{color: spaColor, backgroundColor: spaBackColor, width: "50%", padding: "5px", margin: "2px", border: "1px solid", borderColor: "#C0C0C0", marginLeft: 0, borderRadius: "0 5px 5px 0"}}>Spa</div>
        </div>
      </button>
    );
  };
  
  export default LangSwitchBtn;
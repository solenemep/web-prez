import React from "react";

const DarkMode = ({ toggleDarkMode }) => {
  return (
    <div id="darkmode">
      <p>☼</p>
      <div className="switch" onClick={toggleDarkMode}>
        <div className="circle"></div>
      </div>
      <p>☾</p>
    </div>
  );
};

export default DarkMode;

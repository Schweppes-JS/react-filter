import React, { useEffect, useState } from "react";

import "./PopupTable.css";

const PopupTable = ({ isShowed = false, suboptions, setSelectedOption, dispatchSuboption, optionName, appliedSuboptions }) => {
  useEffect(() => {
    setSelectedSuboptions(appliedSuboptions);
  }, [appliedSuboptions]);

  const [selectedSuboptions, setSelectedSuboptions] = useState([]);

  const changeSelectedSuboption = (e, suboption) => {
    if (e.target.checked) {
      setSelectedSuboptions([...selectedSuboptions, { ...suboption }]);
    } else {
      setSelectedSuboptions(selectedSuboptions.filter((item) => item.id !== suboption.id));
    }
  };

  const clearSelectedOptions = () => {
    dispatchSuboption({ type: "SET_SELECTED_SUBOPTION", payload: { option: optionName, suboptions: [] } });
    setSelectedSuboptions([]);
    setSelectedOption(null);
  };

  function applyOptions() {
    dispatchSuboption({ type: "SET_SELECTED_SUBOPTION", payload: { option: optionName, suboptions: selectedSuboptions } });
    setSelectedOption(null);
  }

  return (
    <ul className={`${isShowed ? "visible" : "hidden"} table`}>
      <div className="table__triangle"></div>
      {suboptions.map((suboption, index) => (
        <li className="table__suboption" key={suboption.title + index}>
          <label
            className={`${selectedSuboptions.find((selectedSuboption) => suboption.id === selectedSuboption.id) ? "highlight" : ""} table__label`}>
            <input className="table__input" type="checkbox" value onChange={(e) => changeSelectedSuboption(e, suboption)} />
            {suboption.title}
          </label>
        </li>
      ))}
      <div className="table__controls">
        <button className={`${selectedSuboptions.length > 0 && isShowed ? "visible" : "hidden"} table__button`} onClick={clearSelectedOptions}>
          Cancel
        </button>
        <button className="table__button" onClick={applyOptions}>
          Apply
        </button>
      </div>
    </ul>
  );
};

export default PopupTable;

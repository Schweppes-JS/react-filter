import React, { useState } from "react";

import "./PopupTable.css";

const PopupTable = ({ isShowed = false, suboptions, setSelectedOption }) => {
	const [selectedSuboptions, setSelectedSuboptions] = useState([]);

	const changeSelectedSuboption = (e, id) => {
		if (e.target.checked) {
			setSelectedSuboptions([...selectedSuboptions, id]);
		} else {
			const optionIndex = selectedSuboptions.indexOf(id);
			if (optionIndex > -1) {
				const reducedArray = [...selectedSuboptions];
				reducedArray.splice(optionIndex, 1);
				setSelectedSuboptions(reducedArray);
			}
		}
	};

	const clearSelectedOptions = () => {
		setSelectedSuboptions([]);
		setSelectedOption(null);
	};

	const applyOptions = () => {};

	return (
		<ul className={`${isShowed ? "visible" : "hidden"} table`}>
			{suboptions.map((option, index) => (
				<li className="table__option" key={option.title + index}>
					<label className={`${selectedSuboptions.includes(option.id) ? "highlight" : ""} table__label`}>
						<input className="table__input" type="checkbox" onChange={(e) => changeSelectedSuboption(e, option.id)} />
						{option.title}
					</label>
				</li>
			))}
			<div className="table__controls">
				<button className="table__button" onClick={clearSelectedOptions}>
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

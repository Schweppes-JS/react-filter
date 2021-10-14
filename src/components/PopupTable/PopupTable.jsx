import React, { useState } from "react";

import "./PopupTable.css";

const PopupTable = ({ isShowed = false, suboptions }) => {
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
		</ul>
	);
};

export default PopupTable;

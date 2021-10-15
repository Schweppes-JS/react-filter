import React, { useState } from "react";

import FilterOption from "../FilterOption/FilterOption";
import "./Accordion.css";

const Accordion = ({ options, data, selectedOption, appliedSuboptions, setSelectedOption, dispatchSuboption }) => {
	const [isAccordionVisible, setAccordionVisibility] = useState(false);
	const changeVisibility = () => {
		setSelectedOption("more");
	};

	return (
		<>
			<p className={`${selectedOption === "more" ? "highlight" : ""} accordion__label`} onClick={changeVisibility}>
				More Filters
			</p>
			<ul className={`${selectedOption === "more" ? "visible" : "hidden"} accordion__list`}>
				<div className="accordion__triangle"></div>
				{options.map(
					(name, index) => index >= 2 && <span>123</span>
					// <FilterOption
					// 	name={name}
					// 	key={name + index}
					// 	suboptions={data[name]}
					// 	selectedOption={selectedOption}
					// 	isSelected={selectedOption === name}
					// 	appliedSuboptions={appliedSuboptions}
					// 	setSelectedOption={setSelectedOption}
					// 	dispatchSuboption={dispatchSuboption}
					// 	appliedSuboptions={appliedSuboptions[name]}
					// />
				)}
			</ul>
		</>
	);
};

export default Accordion;

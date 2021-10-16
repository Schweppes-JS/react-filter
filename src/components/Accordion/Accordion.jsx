import React, { useState } from "react";
import AccordionOption from "../AccordionOption/AccordionOption";

import "./Accordion.css";

const Accordion = ({ options, data, selectedOption, appliedSuboptions, setSelectedOption, dispatchSuboption }) => {

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
					(name, index) => index >= 2 && 
					<AccordionOption 
						name={name}
						key={name + index}
						suboptions={data[name]}
						dispatchSuboption={dispatchSuboption}
						appliedSuboptions={appliedSuboptions[name]}
					/>
				)}
			</ul>
		</>
	);
};

export default Accordion;

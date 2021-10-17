import React, { useEffect, useState } from "react";

import AccordionOption from "../AccordionOption/AccordionOption";
import FilterOption from "../FilterOption/FilterOption";
import "./Accordion.css";

const Accordion = ({ options, data, selectedOption, setSelectedOption, appliedSuboptions, dispatchSuboption }) => {
	const [isAccordionVisible, setAccordionVisibility] = useState(false);
	console.log(isAccordionVisible);

	const changeVisibility = () => {
		setAccordionVisibility(!isAccordionVisible);
		setSelectedOption(null);
	};

	useEffect(() => {
		(selectedOption === options[0] || selectedOption === options[1]) && setAccordionVisibility(false);
	}, [selectedOption]);

	return (
		<>
			<p className={`${isAccordionVisible ? "highlight" : ""} accordion__label`} onClick={changeVisibility}>
				More Filters
			</p>
			<ul className={`${isAccordionVisible ? "visible" : "hidden"} accordion__list`}>
				<div className="accordion__triangle"></div>
				{options.map(
					(name, index) =>
						index >= 2 && (
							<FilterOption
								name={name}
								isAccordion
								key={name + index}
								suboptions={data[name]}
								selectedOption={selectedOption}
								isSelected={selectedOption === name}
								setSelectedOption={setSelectedOption}
								dispatchSuboption={dispatchSuboption}
								appliedSuboptions={appliedSuboptions[name]}
							/>
						)
				)}
			</ul>
		</>
	);
};

export default Accordion;

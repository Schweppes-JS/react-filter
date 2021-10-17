import React, { useMemo } from "react";

import PopupTable from "../PopupTable/PopupTable";
import "./AccordionOption.css";
import "./FilterOption.css";

const FilterOption = ({ setSelectedOption, suboptions, name, isSelected, dispatchSuboption, appliedSuboptions, isAccordion }) => {
	const changeVisibility = () => (isSelected ? setSelectedOption(null) : setSelectedOption(name));
	const option = useMemo(
		() => (
			<li className={`${isAccordion ? "accordion-option" : "filter-option"}`}>
				<p
					className={`${!isAccordion && isSelected ? "highlight" : ""} ${isAccordion ? "accordion-option__lable" : "filter-option__label"}`}
					onClick={changeVisibility}
				>
					<span>
						{name}
						{appliedSuboptions.length > 0 && <span>({appliedSuboptions.length})</span>}
					</span>
					{isAccordion && <span className="accordion-option__symbol">{isSelected ? "-" : "+"}</span>}
				</p>
				<PopupTable
					optionName={name}
					isShowed={isSelected}
					suboptions={suboptions}
					setSelectedOption={setSelectedOption}
					dispatchSuboption={dispatchSuboption}
					appliedSuboptions={appliedSuboptions}
				/>
			</li>
		),
		[isSelected, appliedSuboptions.length]
	);
	return option;
};

export default FilterOption;

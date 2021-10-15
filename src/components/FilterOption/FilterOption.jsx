import React, { useMemo } from "react";

import PopupTable from "../PopupTable/PopupTable";
import "./FilterOption.css";

const FilterOption = ({ setSelectedOption, suboptions, name, isSelected, dispatchSuboption, appliedSuboptions }) => {
	const option = useMemo(
		() => (
			<li className="filter-option">
				<p className={`${isSelected ? "highlight" : ""} filter-option__label`} onClick={() => setSelectedOption(name)}>
					{name}
					{appliedSuboptions.length > 0 && <span>({appliedSuboptions.length})</span>}
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

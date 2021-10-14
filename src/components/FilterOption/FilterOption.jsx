import React, { useMemo } from "react";

import PopupTable from "../PopupTable/PopupTable";
import "./FilterOption.css";

const FilterOption = ({ setSelectedOption, suboptions, name, isSelected = false }) => {
	const option = useMemo(
		() => (
			<li className="filter-option" onClick={() => setSelectedOption(name)}>
				<p className={`${isSelected ? "highlight" : ""} filter-option__label`}>{name}</p>
				<PopupTable isShowed={isSelected} suboptions={suboptions} setSelectedOption={setSelectedOption} />
			</li>
		),
		[isSelected]
	);
	return option;
};

export default FilterOption;

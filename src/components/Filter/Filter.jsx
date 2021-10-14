import React, { useState } from "react";
import FilterOption from "../FilterOption/FilterOption";
import data from "../../assets/data.json";

import "./Filter.css";

const Filter = () => {
	const [selectedOption, setSelectedOption] = useState(null);

	return (
		<ul className="filter">
			{Object.keys(data).map((name, index) => (
				<FilterOption
					name={name}
					key={name + index}
					suboptions={data[name]}
					isSelected={selectedOption === name}
					setSelectedOption={setSelectedOption}
				/>
			))}
		</ul>
	);
};

export default Filter;

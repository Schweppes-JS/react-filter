import React, { useState, useReducer } from "react";

import { initialSuboptionsState, options, suboptionsReducer } from "../../helpers/functions/reducers";
import { useDeviceDetect } from "../../helpers/hooks/deviceDetector";
import AppliedFilters from "../AplliedFilters/AppliedFilters";
import FilterOption from "../FilterOption/FilterOption";
import Accordion from "../Accordion/Accordion";
import data from "../../assets/data.json";
import "./Filter.css";

const Filter = () => {
	const [appliedSuboptions, dispatchSuboption] = useReducer(suboptionsReducer, initialSuboptionsState);
	const [selectedOption, setSelectedOption] = useState(null);
	const isMobile = useDeviceDetect();

	const mobileTemplate = () => {
		return (
			<>
				{options.map(
					(name, index) =>
						index < 2 && (
							<FilterOption
								name={name}
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
				<li className="filter__accordion">
					<Accordion
						data={data}
						options={options}
						selectedOption={selectedOption}
						appliedSuboptions={appliedSuboptions}
						setSelectedOption={setSelectedOption}
						dispatchSuboption={dispatchSuboption}
					/>
				</li>
			</>
		);
	};

	const desktopTemplate = () =>
		options.map((name, index) => (
			<FilterOption
				name={name}
				key={name + index}
				suboptions={data[name]}
				selectedOption={selectedOption}
				isSelected={selectedOption === name}
				setSelectedOption={setSelectedOption}
				dispatchSuboption={dispatchSuboption}
				appliedSuboptions={appliedSuboptions[name]}
			/>
		));

	return (
		<>
			<ul className="filter">{isMobile ? mobileTemplate() : desktopTemplate()}</ul>
			<AppliedFilters appliedSuboptions={appliedSuboptions} dispatchSuboption={dispatchSuboption} />
		</>
	);
};

export default Filter;

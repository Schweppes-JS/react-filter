import React, { useState, useReducer } from "react";

import { useDeviceDetect } from "../../helpers/hooks/deviceDetector";
import AppliedFilters from "../AplliedFilters/AppliedFilters";
import FilterOption from "../FilterOption/FilterOption";
import Accordion from "../Accordion/Accordion";
import data from "../../assets/data.json";
import "./Filter.css";

const options = Object.keys(data);
const initialSuboptionsState = options.reduce((accumulate, current) => ({ ...accumulate, [current]: [] }), {});
const suboptionsReducer = (state, action) => {
	switch (action.type) {
		case "SET_SELECTED_SUBOPTION":
			return { ...state, [action.payload.option]: action.payload.suboptions };
		case "REMOVE_ITEM":
			return {
				...state,
				[action.payload.option]: state[action.payload.option].filter((item) => item.id !== action.payload.suboption.id),
			};
		case "CLEAR_STATE":
			return initialSuboptionsState;
		default:
			return state;
	}
};

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
			<div className="container">
				<ul className="filter">{isMobile ? mobileTemplate() : desktopTemplate()}</ul>
			</div>
			{isMobile && <div></div>}
			<AppliedFilters appliedSuboptions={appliedSuboptions} dispatchSuboption={dispatchSuboption} />
		</>
	);
};

export default Filter;

import React, { useState, useReducer } from "react";
import FilterOption from "../FilterOption/FilterOption";
import data from "../../assets/data.json";

import "./Filter.css";
import AppliedFilters from "../AplliedFilters/AppliedFilters";

const Filter = () => {
	const [selectedOption, setSelectedOption] = useState(null);

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
				return initialSuboptions;
			default:
				return state;
		}
	};
	const initialSuboptions = Object.keys(data).reduce((accumulate, current) => ({ ...accumulate, [current]: [] }), {});
	const [appliedSuboptions, dispatchSuboption] = useReducer(suboptionsReducer, initialSuboptions);

	return (
		<>
			<ul className="filter">
				{Object.keys(data).map((name, index) => (
					<FilterOption
						name={name}
						key={name + index}
						suboptions={data[name]}
						selectedOption={selectedOption}
						isSelected={selectedOption === name}
						appliedSuboptions={appliedSuboptions}
						setSelectedOption={setSelectedOption}
						dispatchSuboption={dispatchSuboption}
						appliedSuboptions={appliedSuboptions[name]}
					/>
				))}
			</ul>
			<AppliedFilters appliedSuboptions={appliedSuboptions} dispatchSuboption={dispatchSuboption} />
		</>
	);
};

export default Filter;

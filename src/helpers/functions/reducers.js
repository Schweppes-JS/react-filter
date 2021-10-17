import data from "../../assets/data.json";

export const options = Object.keys(data);
export const initialSuboptionsState = options.reduce((accumulate, current) => ({ ...accumulate, [current]: [] }), {});
export const suboptionsReducer = (state, action) => {
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

const defaultState = {
	catalogIndex: 0,
};

const catalogReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "SET_CATALOG":
			return { ...state, catalogIndex: action.catalogIndex };
		default:
			return state;
	}
};

export default catalogReducer;

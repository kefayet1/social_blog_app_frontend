const initialState = [];
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_POSTS":
            return action.payload.data;
        case "DELETE_POST":
            state = state.filter((item) => item.id !== action.payload);
            return state;
        default:
            return state;
    }
};

export default postReducer;

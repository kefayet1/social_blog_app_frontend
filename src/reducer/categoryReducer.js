const categoryReducer = (state, action) => {
    switch (action.type) {
        case "INITIAL_CATEGORY":
            return action.payload;
        case "SEARCH_CATEGORY":
            return action.payload;
        case "UPDATE_CATEGORY":
            state = state.map((category) =>
                category.id === action.payload.id
                    ? {
                          ...category,
                          title: action.payload.title,
                          hashtag: action.payload.hashtag,
                      }
                    : category
            );
            return state;
        case "DELETE_CATEGORY":
            state = state.filter((item) => item.id !== action.payload);
            return state;
        default:
            return state;
    }
};

export default categoryReducer;

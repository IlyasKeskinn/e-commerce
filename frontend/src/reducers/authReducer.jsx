const authState = {
    user: {}
};

export const authReducer = (state = authState, action) => {
    switch (action.type) {
        case "SET_AUTH":
            return { ...state, user: action.authUser };
        case "GET_AUTH":
            return { ...state, user: action.authUser };
        case "DELETE_USER":
            return { user: {} };
        default:
            return state;
    }
}
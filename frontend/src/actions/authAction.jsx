export const setAuth = (authUser) => (
    {
        type: "SET_AUTH",
        authUser
    }
)
export const setAuthUser = (authUser, authToken, formData) => {
    return (dispatch) => {
        localStorage.setItem("x-auth-token", JSON.stringify(authToken));
        localStorage.setItem("user", JSON.stringify({ user: authUser, "remeberMe": formData.rememberMe }));
        dispatch(setAuth(authUser));
    }
}
export const getAuth = (authUser) => ({
    type: "GET_AUTH",
    authUser
});

export const getAuthUser = () => {
    return (dispatch) => {
        const authUser = JSON.parse(localStorage.getItem("user")) || [];
        dispatch(getAuth(authUser));
    };
};

export const deleteAuth = () => (
    {
        type : "DELETE_USER",
    }
)

export const deleteAuthUser = () => {
    return(dispatch) => {
        localStorage.removeItem("user");
        localStorage.removeItem("x-auth-token");
        dispatch(deleteAuth());
    }
}
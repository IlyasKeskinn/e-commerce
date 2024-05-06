export const setCartAside = (isActive) => (
    {
        type: "SET_CART_ASIDE",
        isActive
    }
);

export const setCartAsideAction = (isActive) => {
    return (dispatch) => {
        dispatch(setCartAside(isActive));
    }
}
export const setAuthAside = (isActive) => (
    {
        type: "SET_AUTH_ASIDE",
        isActive
    }
)

export const setAuthAsideAction = (isActive) => {
    return (dispatch) => {
        dispatch(setAuthAside(isActive));
    }
}

export const searchModal = (isActive) => (
    {
        type: "SET_SEARCH_MODAL",
        isActive
    }
)

export const searchModalAction = (isActive) => {
    return (dispatch) => {
        dispatch(searchModal(dispatch));
    }
}

export const setPageOverlay = () => (
    {
        type: "SET_PAGE_OVERLAY"
    }
)

export const setPageOverlayAction = () => { 
    return(dispatch) => {
        dispatch(setPageOverlay());
    }
}
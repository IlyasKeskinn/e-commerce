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

export const setSearchModalAction = (isActive) => {
    return (dispatch) => {
        dispatch(searchModal(isActive));
    }
}
export const mobileMenu = (isActive) => (
    {
        type: "SET_MOBILE_MENU",
        isActive
    }
)

export const setMobileMenu = (isActive) => {
    return (dispatch) => {
        dispatch(mobileMenu(isActive));
    }
}
export const mobileSubMenu = (isActive) => (
    {
        type: "SET_MOBILE_SUB_MENU",
        isActive
    }
)

export const setMobileSubMenu = (isActive) => {
    return (dispatch) => {
        dispatch(mobileSubMenu(isActive));
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
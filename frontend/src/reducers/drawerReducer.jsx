const initalState = { isCartAsideActive: false, isAuthAsideActive: false, isSearchModalActive: false, isPageOverlayActive: false };

export const drawerReducer = (state = initalState, action) => {
    switch (action.type) {
        case "SET_CART_ASIDE":
            return { ...state, isCartAsideActive: action.isActive, isPageOverlayActive: action.isActive };
        case "SET_AUTH_ASIDE":
            return { ...state, isAuthAsideActive: action.isActive, isPageOverlayActive: action.isActive }
        case "SET_SEARCH_MODAL":
            return { ...state, isSearchModalActive: action.isActive, isPageOverlayActive: action.isActive }
        case "SET_PAGE_OVERLAY":
            return {
                ...state,
                isPageOverlayActive: false,
                isCartAsideActive: false,
                isAuthAsideActive: false,
                isSearchModalActive : false
            }
        default:
            return { ...state };
    }
}
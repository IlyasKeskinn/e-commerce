import React from 'react'
import { connect } from 'react-redux';
import { setSearchModalAction } from '../../../../actions/drawerAction';
const SearchIcon = (props) => {
    const handleSearchClick = (e) => {
        e.preventDefault();
        const isSearchModalActive = !props.drawer.isSearchModalActive;
        props.dispatch(setSearchModalAction(isSearchModalActive));
    }
    return (
        <a href="" onClick={(e) => { handleSearchClick(e) }}>
            <i className={`bi bi-${props.drawer.isSearchModalActive ? "x-lg" : "search"}`}></i>
        </a>
    )
}


const mapStateToProps = (state) => {
    return {
        drawer: state.drawer
    }
}

export default connect(mapStateToProps)(SearchIcon)

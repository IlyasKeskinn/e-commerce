import React from 'react'
import { connect } from 'react-redux';
import { setAuthAside, setCartAsideAction } from '../../../../actions/drawerAction';
import { Link } from 'react-router-dom';
const LoginIcon = (props) => {
    return (
        props.auth.user.user && props.auth.user.user.email ?
            <Link to={`/account`}>
                <i className="bi bi-person"></i>
            </Link>
            :
            <a href="#" className="header-tools__profile">
                <i className="bi bi-person" onClick={() => { props.dispatch(setAuthAside(true)) }}></i>
            </a>

    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps)(LoginIcon)


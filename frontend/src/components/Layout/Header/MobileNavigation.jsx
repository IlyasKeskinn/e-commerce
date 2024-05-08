import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileCategories from './MobileCategories';
import { connect } from 'react-redux';
import MobileSubmenuCategories from './MobileSubmenuCategories';
import { setMobileMenu } from '../../../actions/drawerAction';

const MobileNavigation = ({ data, drawer, dispatch }) => {
    const [selectedCategory, setSelectedCategory] = useState({});
    const handleSubcategory = (id) => {
        setSelectedCategory(data.find((cat) => cat._id === id));
    }

    const closeMobileMenu = () => {
        dispatch(setMobileMenu((false)));
    }
    return (
        <div className="container">

            <div className="overflow-hidden">
                <ul className={`mobile-navigation-menu position-relative ${drawer.isOpenMobileSubMenu ? "active" : "false"}`}>
                    <li className="navigation-item">
                        <Link onClick={() => {closeMobileMenu()}} to={"/home"}>
                            <h1>Home</h1>
                        </Link>
                    </li>
                    {data.map((category => {
                        return <MobileCategories handleSubcategory={handleSubcategory} category={category} />;
                    }))}
                    <div className={`mobile-sub-menu__wrapper d-${drawer.isOpenMobileSubMenu ? "block" : "none"}`}>
                        {drawer.isOpenMobileSubMenu && <MobileSubmenuCategories closeMobileMenu={closeMobileMenu} category={selectedCategory} />}
                    </div>
                    <li className="navigation-item">
                        <Link onClick={() => {closeMobileMenu()}} to={"/about"}>
                            About
                        </Link>
                    </li>
                    <li className="navigation-item" >
                        <Link onClick={() => {closeMobileMenu()}} to={"/contact"}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        drawer: state.drawer
    }
}

export default connect(mapStateToProps)(MobileNavigation)


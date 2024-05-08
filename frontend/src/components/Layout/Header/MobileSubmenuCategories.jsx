import { connect } from 'react-redux';
import { setMobileSubMenu } from '../../../actions/drawerAction';
import { Link } from 'react-router-dom';

export const MobileSubmenuCategories = ({ category, dispatch, drawer, closeMobileMenu }) => {
    const toggleMenu = (e) => {
        e.preventDefault();
        dispatch(setMobileSubMenu((!drawer.isOpenMobileSubMenu)));
    };

    return (
        <ul className="default-menu-content">
            <li onClick={toggleMenu} className="sub-menu__item js-back-menu mt-3 d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                </svg>
                <a href="#" className="menu-title">
                    <h4 className="mega-menu-title">Home</h4>
                </a>
            </li>
            <li className="sub-menu__item my-2">
                <Link to={`/allproducts/${category.seo_link}`} onClick={() => { closeMobileMenu() }} className="menu-link btn btn-outlined-half">{category.name}</Link>
            </li>
            <hr className="divider text-secondary mb-3"></hr>
            {category.subcategory.map((subCat) => {
                return (
                    <li className="sub-menu__item my-2">
                        <Link to={`/shop/${subCat.seo_link}`} onClick={() => { closeMobileMenu() }} className="menu-link btn btn-outlined-half">{subCat.name}</Link>
                    </li>
                );
            })}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        drawer: state.drawer
    }
}

export default connect(mapStateToProps)(MobileSubmenuCategories)

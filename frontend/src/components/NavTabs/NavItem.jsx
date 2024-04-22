import "./NavItem.css"
export const NavItem = (props) => {
    const handleTab = (e)=> {
        e.preventDefault();
        props.setActiveTabs(props.tabIndex);
    }
    return (
        <li className={`nav-item `} onClick={(e)=> {handleTab(e)}}>
            <a href="#" id={props.navId}
                className={`btn btn-full text-uppercase text-secondary  ${props.isActive ? "active" : ""}`}>
                {props.navText}
            </a>
        </li>
    )
}

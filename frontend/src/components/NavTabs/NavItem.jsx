import "./NavItem.css"
export const NavItem = (props) => {
    
    const handleTab = (e)=> {
        e.preventDefault();
        if (props.setActiveTabs) {
            props.setActiveTabs(props.navId);
          } else if (props.setActiveReview) {
            props.setActiveReview(props.navId);
          }
    }
    return (
        <li className={`nav-item me-2`}  onClick={(e)=> {handleTab(e)}}>
            <a href="#"  id={props.navId}
                className={`btn btn-full text-uppercase text-secondary  ${props.isActive ? "active" : ""}`}>
                {props.navText}
            </a>
        </li>
    )
}

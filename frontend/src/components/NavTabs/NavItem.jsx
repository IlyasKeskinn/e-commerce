export const NavItem = (props) => {
    return (
        <li className="nav-item">
            <a href="#" id={props.navId}
                className="btn btn-full text-uppercase text-secondary  active!">
                {props.navText}
            </a>
        </li>
    )
}

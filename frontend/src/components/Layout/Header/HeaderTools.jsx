import { Search } from "../../Search/Serach";
export const HeaderTools = () => {
    return (
        <div className="header-tools">
            <Search />
            <a href="#" className="header-tools__profile">
                <i className="bi bi-person"></i>
            </a>
            <a href="#" className="header-tools__item">
                <i className="bi bi-heart"></i>
            </a>
            <a href="#" className="header-tools__item header-tools__cart">
                <i className="bi bi-bag">
                    <span className="cart-amount">0</span>
                </i>
            </a>
        </div>
    );
}
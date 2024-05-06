import { connect } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import { ProductsSkelton } from "../Skeltons/ProductsSkeleton";
import { NotFoundItem } from "./NotFoundItem";
import { SearchResultItem } from "./SearchResultItem";
import { setSearchModalAction } from "../../actions/drawerAction";
const Search = ({ drawer, dispatch }) => {
    const [value, setValue] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const fetchURL = value && isSearching ? `/product/searchproduct?query=${value}` : null;
    const { data, isLoading, error } = useFetch(fetchURL);
    const [products, setProducts] = useState([]);

    const handleInput = (e) => {
        setValue(e.target.value);
        setIsSearching(e.target.value.length >= 3);
    }


    useEffect(() => {
        if (data && data.length >= 1) {
            setProducts(data)
        }
    }, [data])

    const handleClose = () => {
        setValue("");
        setProducts([]);
        setIsSearching(false);
        dispatch(setSearchModalAction(false));
    }


    return (
        <div className="header-tools__item js-content-visible">
            <div className={`search-popup js-hidden-content ${drawer.isSearchModalActive ? "visible" : ""}`}>
                <div className="container">
                    <div className="popup-items">
                        <form>
                            <p className="text-uppercase text-secondary fw-normal">WHAT ARE YOU LOOKING FOR?
                            </p>
                            <div className="position-relative search-input">
                                <input value={value} onChange={handleInput} type="text" placeholder="Search product"
                                    className="search-field__input search-popup__input" />
                                <i className="bi bi-search"></i>
                            </div>
                            <div className="search_result_wrapper">
                                {isLoading && <ProductsSkelton />}
                                {isSearching && data && data.length <= 0 && <NotFoundItem />}
                                <div className="result_items">
                                    {data && products.slice(0, 4).map((product) => {
                                        return (
                                            <SearchResultItem handleClose={handleClose} product={product} key={product._id} />
                                        );
                                    })}
                                </div>
                                {products && products.length > 4 && (
                                    // TODO : FEAT SHOW MORE 
                                    <div className="text-center">
                                        <span className="text-dark btn btn-outlined">Show More...</span>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        drawer: state.drawer
    }
}

export default connect(mapStateToProps)(Search);


import { Link } from "react-router-dom";
export const ShopSettings = ({ maincat, subcat, handleSorting, sort, handleView }) => {
    const handleChange = (e) => {
        handleSorting(e.target.value);
    }
    const handleViewSettings = (e) => {
        handleView(e.target.value);
    }
    return (
        <div className="shop-settings d-flex justify-content-between align-items-center my-3">
            <div className="breadcrumb">
                <Link to={"/"} href="#" className="btn btn-outlined-half text-uppercase">Home</Link>
                <span className="fw-normal">/</span>
                {maincat ? <Link to={`/allproducts/${maincat.seo_link}`} className="btn btn-outlined-half text-uppercase">{maincat.name}</Link> : ""}
                {subcat ? <Link to={`/shop/${subcat.seo_link}`} className="btn btn-outlined-half text-uppercase">/{subcat.name}</Link> : ""}
            </div>
            <div className="shop-asc d-flex justify-content-center align-items-center">
                <select value={sort} onChange={handleChange} name="shopasc" id="shopAscSelect" className="shop-asc__select fw-normal text-uppercase">
                    <option value="DEFAULT">Default Sorting</option>
                    <option value="A-Z">Alphabetically, A-Z</option>
                    <option value="Z-A">Alphabetically, Z-A</option>
                    <option value="LOW-HIGH">Price, low to high</option>
                    <option value="HIGH-LOW">Price, high to low</option>
                </select>
                <div className="shop-asc__seperator mx-3"></div>
                <div className="shop-asc__viewsettings">
                    <span className="fw-600 text-uppercase">View</span>
                    <button onClick={(e) => handleViewSettings(e)} value={2} className="btn btn-outlined-half fw-normal text-uppercase">2</button>
                    <button onClick={(e) => handleViewSettings(e)} value={3} className="btn btn-outlined-half fw-normal text-uppercase">3</button>
                    <button onClick={(e) => handleViewSettings(e)} value={4} className="btn btn-outlined-half fw-normal text-uppercase">4</button>
                </div>
                <div className="shop-asc__seperator mx-3"></div>
                <div className="shop-asc__filter">
                    <button className="btn btn-outlined-half js-open-aside d-flex align-items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="bi bi-filter" viewBox="0 0 16 16">
                            <path
                                d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                        </svg>
                        <span className="fw-normal text-uppercase ms-2 ">Filter</span>
                    </button>
                </div>
            </div>
        </div>

    );
}
import "./Pagination.css"

export const Pagination = ({totalProducts, productLen, loadMore }) => {
    const progressRatio = (productLen / totalProducts) * 100
    const isDisabled = productLen == totalProducts;

    const handleShowMore = (e) => {
        e.preventDefault();
        loadMore();
    }
    return (
        <div className="pagination d-flex justify-content-center align-items-center">
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <p className="text-center text-uppercase fw-normal my-3">SHOWING {productLen} of {totalProducts} items</p>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: progressRatio + "%" }}></div>
                </div>
                <a href="#" onClick={(e) => { handleShowMore(e)}} style={{ display: isDisabled ? "none" : "inherit" }} className="btn btn-outlined-half my-5">Show More</a>
            </div>
        </div>
    );
}
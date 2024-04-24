import "./Pagination.css"

export const Pagination = () => {
    return (
        <div className="pagination d-flex justify-content-center align-items-center">
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <p className="text-center text-uppercase fw-normal my-3">SHOWING 36 of 147 items</p>
                <div className="progress-bar"></div>
                <a href="#" className="btn btn-outlined-half my-5">Show More</a>
            </div>
        </div>
    );
}
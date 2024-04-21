import "./Pagination.css"

export const Pagination = () => {
    return (
        <div class="pagination d-flex justify-content-center align-items-center">
            <div class="container d-flex flex-column justify-content-center align-items-center">
                <p class="text-center text-uppercase fw-normal my-3">SHOWING 36 of 147 items</p>
                <div class="progress-bar"></div>
                <a href="#" class="btn btn-outlined-half my-5">Show More</a>
            </div>
        </div>
    );
}
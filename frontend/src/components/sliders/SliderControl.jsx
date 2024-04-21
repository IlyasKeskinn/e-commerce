export const SliderControl = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="container position-relative">
                <div className="swipper-controller d-flex justify-content-center align-items-center">
                    <span className="swipper-pagination-bullet active" aria-label="Go to slide 1" tabIndex="0"
                        role="button"></span>
                    <span className="swipper-pagination-bullet " aria-label="Go to slide 2" tabIndex="1"
                        role="button"></span>
                </div>
            </div>
        </div>
    );
}
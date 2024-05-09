export const SliderControl = ({ activeIndex, totalSlides, showSlide }) => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="container position-relative">
                <div className="swipper-controller d-flex justify-content-center align-items-center">
                    {Array.from({ length: totalSlides }).map(((bullet, index) => (
                        <span key={index} className={`swipper-pagination-bullet ${activeIndex === index ? "active" : ""}`} onClick={() => showSlide(index)} role="button"></span>
                    )))}
                </div>
            </div>
        </div>
    );
}


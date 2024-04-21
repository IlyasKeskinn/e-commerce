export const SliderItem = () => {
    return (
        <div className="slider-item">
            <div className="slide-show-character active">
                <img className="slide-show-character__img  " src="./img/slideShow/slideshow-character1.png"
                    alt="slideshow-character1"></img>
            </div>
            <div className="slide-show-text container active ps-4">
                <h6 className="position-relative text-uppercase text-dash">New Trend</h6>
                <h2 className="text-uppercase fw-normal">
                    Summer Sale Stylish
                </h2>
                <h2 className="text-uppercase">
                    Womens
                </h2>
                <a href="./shop.html" className="btn btn-outlined">Discover More</a>
            </div>
        </div>
    );
}
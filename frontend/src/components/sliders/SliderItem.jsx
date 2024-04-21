export const SliderItem = () => {
    return (
        <div className="slider-item">
            <div class="slide-show-character active">
                <img class="slide-show-character__img  " src="./img/slideShow/slideshow-character1.png"
                    alt="slideshow-character1"></img>
            </div>
            <div class="slide-show-text container active ps-4">
                <h6 class="position-relative text-uppercase text-dash">New Trend</h6>
                <h2 class="text-uppercase fw-normal">
                    Summer Sale Stylish
                </h2>
                <h2 class="text-uppercase">
                    Womens
                </h2>
                <a href="./shop.html" class="btn btn-outlined">Discover More</a>
            </div>
        </div>
    );
}
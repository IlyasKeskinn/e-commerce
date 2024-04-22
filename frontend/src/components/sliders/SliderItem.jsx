export const SliderItem = ({ slideItem, activeIndex, index}) => {
    return (
        <div className="slider-item">
            <div className={`slide-show-character ${activeIndex === index ? "active" : ""}`}>
                <img className="slide-show-character__img  " src={slideItem.slider_img}
                    alt={slideItem.slider_title}></img>
            </div>
            <div className={`slide-show-text container ps-4 ${activeIndex === index ? "active" : ""}`}>
                <h6 className="position-relative text-uppercase text-dash">{slideItem.slider_topic}</h6>
                <h2 className="text-uppercase fw-normal">
                    {slideItem.slider_title}
                </h2>
                {slideItem.slider_subtitle ? <h2 className="text-uppercase">{slideItem.slider_subtitle}</h2> : ""}
                {slideItem.slider_desc ? <h6 class="text-uppercase">{slideItem.slider_desc}</h6> : ""}
                <a href={slideItem.slider_url} className="btn btn-outlined">Discover More</a>
            </div>

        </div>
    );
}
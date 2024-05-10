export const SliderItem = ({ slideItem, activeIndex, index}) => {
    return (
        <div className="slider-item">
            <div className={`slide-show-character ${activeIndex === index ? "active" : ""}`}>
                <img className="slide-show-character__img  " src={`${slideItem.img}`}
                    alt={slideItem.title}></img>
            </div>
            <div className={`slide-show-text container ps-4 ${activeIndex === index ? "active" : ""}`}>
                <h6 className="position-relative text-uppercase text-dash">{slideItem.topic}</h6>
                <h2 className="text-uppercase fw-normal">
                    {slideItem.title}
                </h2>
                {slideItem.sub_title ? <h2 className="text-uppercase">{slideItem.sub_title}</h2> : ""}
                {slideItem.desc ? <h6 className="text-uppercase">{slideItem.desc}</h6> : ""}
                <a href={slideItem.slider_url} className="btn btn-outlined">Discover More</a>
            </div>

        </div>
    );
}